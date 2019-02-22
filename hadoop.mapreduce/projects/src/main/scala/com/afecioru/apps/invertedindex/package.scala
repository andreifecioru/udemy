package com.afecioru.apps

import org.apache.hadoop.io.{LongWritable, Text}
import org.apache.hadoop.mapreduce.{Mapper, Reducer}

package object invertedindex {

  object Types {
    type InvertedIndexMapperType = Mapper[LongWritable, Text, Text, Text]
    type InvertedIndexMapperContext = InvertedIndexMapperType#Context

    type InvertedIndexReducerType = Reducer[Text, Text, Text, Text]
    type InvertedIndexReducerContext = InvertedIndexReducerType#Context
  }
}
