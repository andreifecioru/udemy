package com.afecioru.apps

import org.apache.hadoop.io.{LongWritable, Text}
import org.apache.hadoop.mrunit.mapreduce.{MapDriver, MapReduceDriver, ReduceDriver}

package object invertedindex_test {
  object Types {
    type InvertedIndexMapDriver = MapDriver[LongWritable, Text, Text, Text]
    type InvertedIndexReducerDriver = ReduceDriver[Text, Text, Text, Text]
    type InvertedIndexMapReduceDriver = MapReduceDriver[LongWritable, Text, Text, Text, Text, Text]
  }
}
