package com.afecioru.apps.bigram

import scala.collection.JavaConverters._

import com.afecioru.apps.bigram.Types.TextPair
import org.junit.{Before, Test}
import com.afecioru.apps.bigram_test.TestTypes._
import org.apache.hadoop.io.{IntWritable, LongWritable, Text}

class TestBigramJob {
  val mapDriver = new BigramMapDriver
  val reduceDriver = new BigramReduceDriver
  val mapReduceDriver = new BigramMapReduceDriver

  @Before
  def setUp(): Unit = {
    mapDriver.setMapper(new BigramMapper)
    reduceDriver.setReducer(new BigramReducer)

    mapReduceDriver.setMapper(new BigramMapper)
    mapReduceDriver.setReducer(new BigramReducer)
  }

  @Test
  def testMapper(): Unit = {
    mapDriver.withInput(new LongWritable(1), new Text("Andrei is the best! He really is the best."))

    mapDriver.withOutput(TextPair("andrei", "is"), new IntWritable(1))
    mapDriver.withOutput(TextPair("is", "the"), new IntWritable(1))
    mapDriver.withOutput(TextPair("the", "best"), new IntWritable(1))
    mapDriver.withOutput(TextPair("best", "he"), new IntWritable(1))
    mapDriver.withOutput(TextPair("he", "really"), new IntWritable(1))
    mapDriver.withOutput(TextPair("really", "is"), new IntWritable(1))
    mapDriver.withOutput(TextPair("is", "the"), new IntWritable(1))
    mapDriver.withOutput(TextPair("the", "best"), new IntWritable(1))

    mapDriver.runTest()
  }

  @Test
  def testReducer(): Unit = {
    val tp = TextPair("one", "two")
    val values = List(new IntWritable(1), new IntWritable(1))

    reduceDriver.withInput(tp, values.asJava)
    reduceDriver.addOutput(new Text(tp.toString), new IntWritable(2))

    reduceDriver.runTest()
  }

  @Test
  def testMapperReducer(): Unit = {
    mapReduceDriver.withInput(new LongWritable(1), new Text("Andrei is the best! He really is the best."))

    mapReduceDriver.withOutput(new Text("andrei\tis"), new IntWritable(1))
    mapReduceDriver.withOutput(new Text("best\the"), new IntWritable(1))
    mapReduceDriver.withOutput(new Text("he\treally"), new IntWritable(1))
    mapReduceDriver.withOutput(new Text("is\tthe"), new IntWritable(2))
    mapReduceDriver.withOutput(new Text("really\tis"), new IntWritable(1))
    mapReduceDriver.withOutput(new Text("the\tbest"), new IntWritable(2))

    mapReduceDriver.runTest()
  }
}
