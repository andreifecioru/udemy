package com.afecioru.apps.invertedindex

import java.lang.Iterable

import scala.collection.mutable.{MutableList => MList}

import org.apache.hadoop.io.Text

import Types._


class InvertedIndexReducer extends InvertedIndexReducerType {

  val REDUCER_TARGET_SEPARATOR_KEY = "reducer.target.separator"

  override def reduce(key: Text, values: Iterable[Text], context: InvertedIndexReducerContext): Unit = {
    val targetSeparator = context.getConfiguration.get(REDUCER_TARGET_SEPARATOR_KEY, "|")

    /*
     * NOTE: Hadoop is reusing the value object while streaming the reducer values.
     * So in order to capture all of your different values, we need to perform a copy
     */
    val targets = MList.empty[String]
    values.forEach(v =>
      if (v.toString.nonEmpty && !targets.contains(v.toString))
        targets += v.toString
    )

    val result = targets
      .reduce((acc, v) => s"$acc $targetSeparator ${v.toString}")

    context.write(key, new Text(result))
  }
}
