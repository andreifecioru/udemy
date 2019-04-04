package oop.exercises

import scala.annotation.tailrec

object CustomList extends App {

  val list = MyList(1, 2, 3)
  println(list)

  val anotherList = MyList()
  println(anotherList)

  // --------------------------
  sealed trait Node[+T] {
    def isEmpty: Boolean
    def head: T
    def tail: Node[T]

    def add[U >: T](value: U): ValueNode[U] = new ValueNode(value, this)

    override def toString: String = {
      @tailrec
      def _helper(acc: String, node: Node[T]): String = {
        if (node.isEmpty) acc
        else _helper(s"$acc, ${node.head}", node.tail)
      }

      if (isEmpty) "[]"
      else s"[${_helper(head.toString, tail)}]"
    }
  }

  class ValueNode[T](override val head: T, override val tail: Node[T]) extends Node[T] {
    override def isEmpty: Boolean = false
  }

  object NilNode extends Node[Nothing] {
    override def isEmpty: Boolean = true
    override def head: Nothing = throw new NoSuchElementException
    override def tail: Nothing = throw new NoSuchElementException
  }

  object MyList {
    def apply[T]: Node[T] = NilNode
    def apply[T](values: T*): Node[T] = values.foldLeft(NilNode.asInstanceOf[Node[T]])(_.add(_))
  }
}
