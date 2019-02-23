package com.afecioru.apps

import java.io.{DataInput, DataOutput}

import org.apache.hadoop.io.{IntWritable, LongWritable, Text, WritableComparable}
import org.apache.hadoop.mapreduce.{Mapper, Reducer}

package object bigram {
  object Types {
    type BigramMapperType = Mapper[LongWritable, Text, TextPair, IntWritable]
    type BigramMapperContext = BigramMapperType#Context

    type BigramReducerType = Reducer[TextPair, IntWritable, Text, IntWritable]
    type BigramReducerContext = BigramReducerType#Context

    class TextPair extends WritableComparable[TextPair] {
      val first = new Text()
      val second = new Text()

      override def write(out: DataOutput): Unit = {
        first.write(out)
        second.write(out)
      }

      override def readFields(in: DataInput): Unit = {
        first.readFields(in)
        second.readFields(in)
      }

      override def compareTo(o: TextPair): Int = {
        val cmp = first.compareTo(o.first)

        if (cmp == 0) second.compareTo(o.second)
        else cmp
      }

      override def hashCode(): Int =
        first.hashCode() * 163 + second.hashCode()

      override def equals(obj: Any): Boolean = {
        if (!obj.isInstanceOf[TextPair]) false
        else {
          val other = obj.asInstanceOf[TextPair]
          first.equals(other.first) && second.equals(other.second)
        }
      }

      override def toString: String = s"$first\t$second"
    }

    object TextPair {
      def apply(first: String, second: String): TextPair = {
        val tp = new TextPair
        tp.first.set(first)
        tp.second.set(second)
        tp
      }

      def apply(first: Text, second: Text): TextPair =
        apply(first.toString, second.toString)
    }
  }

}
