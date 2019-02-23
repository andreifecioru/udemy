package com.afecioru.apps.bigram

import org.apache.hadoop.io.{IntWritable, LongWritable, Text}
import Types._


class BigramMapper extends BigramMapperType {
  val lastWord = new Text()

  override def map(key: LongWritable, value: Text, context: BigramMapperContext): Unit = {
    implicit val ctx: BigramMapperContext = context

    value.toString.split("\\s+")
      .foreach(processWord)
  }

  private def processWord(word: String)(implicit context: BigramMapperContext): Unit = {
    val currentWord = new Text(sanitize(word))

    if (lastWord.toString.nonEmpty) {
      context.write(TextPair(lastWord, currentWord), new IntWritable(1))
    }

    lastWord.set(currentWord)
  }

  private def sanitize(in: String): String = {
    in.toLowerCase
      .replace(".", "")
      .replace(",", "")
      .replace(";", "")
      .replace("!", "")
      .replace("!", "")
      .replace("?", "")
  }
}
