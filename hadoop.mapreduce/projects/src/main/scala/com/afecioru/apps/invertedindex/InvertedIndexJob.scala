package com.afecioru.apps.invertedindex

import org.apache.hadoop.conf.Configured
import org.apache.hadoop.fs.Path
import org.apache.hadoop.io.Text
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat
import org.apache.hadoop.mapreduce.Job
import org.apache.hadoop.util.{Tool, ToolRunner}


object InvertedIndexJob extends Configured with Tool {
  override def run(args: Array[String]): Int = {
    // Check command line args
    if (args.length != 2) {
      println("Usage: <input path> <output path>")
      return -1
    }

    getConf.set("mapreduce.output.textoutputformat.separator", " | ")

    // Instantiate the job
    val job = Job.getInstance(getConf)
    job.setJarByClass(InvertedIndexJob.getClass)
    job.setJobName("Inverted Index")

    // Set the in/out paths
    val inputPath = new Path(args(0))
    FileInputFormat.addInputPath(job, inputPath)

    val outputPath = new Path(args(1))
    FileOutputFormat.setOutputPath(job, outputPath)

    // Configure mapper/combiner/reducer
    job.setMapperClass(classOf[InvertedIndexMapper])
//    job.setCombinerClass(classOf[InvertedIndexReducer])
    job.setReducerClass(classOf[InvertedIndexReducer])

    // Set the mapper's output k/v types
    job.setMapOutputKeyClass(classOf[Text])
    job.setMapOutputValueClass(classOf[Text])

    // Set the job's output k/v types
    job.setOutputKeyClass(classOf[Text])
    job.setOutputValueClass(classOf[Text])

    // Execute the job
    if (job.waitForCompletion(true)) 0 else 1
  }

  def main(args: Array[String]): Unit = {
    // Run the job
    val exitCode = ToolRunner.run(InvertedIndexJob, args)
    System.exit(exitCode)
  }
}
