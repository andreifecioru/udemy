package com.afecioru.apps.bigram


import org.apache.hadoop.conf.Configured
import org.apache.hadoop.fs.Path
import org.apache.hadoop.mapreduce.Job
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat
import org.apache.hadoop.util.{Tool, ToolRunner}
import Types.TextPair
import org.apache.hadoop.io.{IntWritable, Text}


object BigramJob extends Configured with Tool {

  override def run(args: Array[String]): Int = {
    // Check command line args
    if (args.length != 2) {
      println("Usage: <input path> <output path>")
      -1
    } else {

      // Instantiate the job
      val job = Job.getInstance(getConf)
      job.setJarByClass(BigramJob.getClass)
      job.setJobName("Bigram MR job")

      // Set the in/out paths
      val inputPath = new Path(args(0))
      FileInputFormat.addInputPath(job, inputPath)

      val outputPath = new Path(args(1))
      FileOutputFormat.setOutputPath(job, outputPath)

      // Configure mapper/combiner/reducer
      job.setMapperClass(classOf[BigramMapper])
      job.setReducerClass(classOf[BigramReducer])

      // Set the mapper's output k/v types
      job.setMapOutputKeyClass(classOf[TextPair])
      job.setMapOutputValueClass(classOf[IntWritable])

      // Set the job's output k/v types
      job.setOutputKeyClass(classOf[Text])
      job.setOutputValueClass(classOf[IntWritable])

      // Execute the job
      if (job.waitForCompletion(true)) 0 else 1
    }
  }

  def main(args: Array[String]): Unit = {
    val exitCode = ToolRunner.run(BigramJob, args)
    System.exit(exitCode)
  }

}
