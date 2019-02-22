package com.afecioru.apps.invertedindex

import java.util.StringTokenizer

import org.apache.hadoop.io.{LongWritable, Text}
import org.apache.hadoop.mapreduce.lib.input.FileSplit

import Types._


class InvertedIndexMapper extends InvertedIndexMapperType {

  override def map(key: LongWritable, value: Text, context: InvertedIndexMapperContext): Unit = {
    val fileName = context.getInputSplit.asInstanceOf[FileSplit].getPath.getName

    val st = new StringTokenizer(value.toString)

    while (st.hasMoreTokens) {
      val word = st.nextToken()
      context.write(new Text(word), new Text(fileName))
    }
  }
}
