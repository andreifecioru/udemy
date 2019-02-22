package com.afecioru.apps.invertedindex

import scala.collection.JavaConverters._

import org.junit.{Before, Test}
import com.afecioru.apps.invertedindex_test.Types._
import org.apache.hadoop.fs.Path
import org.apache.hadoop.io.{LongWritable, Text}

class TestInvertedIndexJob {

  val mapDriver = new InvertedIndexMapDriver
  val reduceDriver = new InvertedIndexReducerDriver
  val mapReduceDriver = new InvertedIndexMapReduceDriver

  @Before
  def setUp(): Unit = {
    mapDriver.setMapper(new InvertedIndexMapper)
    reduceDriver.setReducer(new InvertedIndexReducer)

    mapReduceDriver.setMapper(new InvertedIndexMapper)
    mapReduceDriver.setReducer(new InvertedIndexReducer)
  }

  @Test
  def testMapper(): Unit = {
    mapDriver.withMapInputPath(new Path("some_file.txt"))

    mapDriver.withInput(new LongWritable(1), new Text("this is some text"))

    mapDriver.addOutput(new Text("this"), new Text("some_file.txt"))
    mapDriver.addOutput(new Text("is"), new Text("some_file.txt"))
    mapDriver.addOutput(new Text("some"), new Text("some_file.txt"))
    mapDriver.addOutput(new Text("text"), new Text("some_file.txt"))

    mapDriver.runTest()
  }

  @Test
  def testReducer(): Unit = {
    val values = List(
      new Text("file_1.txt"),
      new Text("file_2.txt")
    )

    reduceDriver.addInput(new Text("some_word"), values.asJava)
    reduceDriver.addOutput(new Text("some_word"), new Text("file_1.txt | file_2.txt"))

    reduceDriver.runTest()
  }

  @Test
  def testMapperReducer(): Unit = {
    mapReduceDriver.setMapInputPath(new Path("file_1.txt"))
    mapReduceDriver.withInput(new LongWritable(1), new Text("this is some text"))

    mapReduceDriver.addOutput(new Text("is"), new Text("file_1.txt"))
    mapReduceDriver.addOutput(new Text("some"), new Text("file_1.txt"))
    mapReduceDriver.addOutput(new Text("text"), new Text("file_1.txt"))
    mapReduceDriver.addOutput(new Text("this"), new Text("file_1.txt"))

    mapReduceDriver.runTest()

  }

}
