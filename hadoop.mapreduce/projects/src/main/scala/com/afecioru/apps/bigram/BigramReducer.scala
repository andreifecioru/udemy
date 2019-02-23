package com.afecioru.apps.bigram

import scala.collection.JavaConverters._
import java.lang.Iterable

import Types._
import org.apache.hadoop.io.{IntWritable, Text}

class BigramReducer extends BigramReducerType {
  override def reduce(key: TextPair, values: Iterable[IntWritable], context: BigramReducerContext): Unit = {
    context.write(new Text(key.toString), new IntWritable(values.asScala.size))
  }
}
