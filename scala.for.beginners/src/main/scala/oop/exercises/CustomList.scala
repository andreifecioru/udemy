package oop.exercises

import scala.annotation.tailrec

object CustomList extends App {

  val list = ListOfInts(1, 2, 3)
  println(list)

  val anotherList = ListOfInts()
  println(anotherList)

  // --------------------------
  sealed trait Node {
    def isEmpty: Boolean
    def head: Int
    def tail: Node

    def add(value: Int): ValueNode = new ValueNode(value, this)

    override def toString: String = {
      @tailrec
      def _helper(acc: String, node: Node): String = {
        if (node.isEmpty) acc
        else _helper(s"$acc, ${node.head}", node.tail)
      }

      if (isEmpty) "[]"
      else s"[${_helper(head.toString, tail)}]"
    }
  }

  class ValueNode(override val head: Int, override val tail: Node) extends Node {
    override def isEmpty: Boolean = false
  }

  object NilNode extends Node {
    override def isEmpty: Boolean = true
    override def head: Int = throw new NoSuchElementException
    override def tail: Node = throw new NoSuchElementException
  }

  object ListOfInts {
    def apply: Node = NilNode
    def apply(values: Int*): Node = values.foldLeft(NilNode.asInstanceOf[Node])(_.add(_))
  }
}
