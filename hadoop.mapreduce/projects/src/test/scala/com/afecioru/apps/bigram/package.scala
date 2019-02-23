package com.afecioru.apps

import org.apache.hadoop.io.{IntWritable, LongWritable, Text}
import org.apache.hadoop.mrunit.mapreduce.{MapDriver, MapReduceDriver, ReduceDriver}

import com.afecioru.apps.bigram.Types._


package object bigram_test {
  object TestTypes {
    type BigramMapDriver = MapDriver[LongWritable, Text, TextPair, IntWritable]
    type BigramReduceDriver = ReduceDriver[TextPair, IntWritable, Text, IntWritable]
    type BigramMapReduceDriver = MapReduceDriver[LongWritable, Text, TextPair, IntWritable, Text, IntWritable]
  }
}

