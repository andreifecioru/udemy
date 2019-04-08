package oop.exercises

import scala.annotation.tailrec

object CustomList extends App {

  val list = MyList(1, 2, 3, 4, 5, 6)
  println(list)

  val anotherList = MyList()
  println(anotherList)

  val even = new MyPredicate[Int] {
    override def test(elem: Int): Boolean = (elem % 2) == 0
  }

  val square = new MyTransformation[Int, Int] {
    override def transform(elem: Int): Int = elem * elem
  }

  val duplicate = new MyTransformation[Int, Node[Int]] {
    override def transform(elem: Int): Node[Int] = ValueNode(elem, ValueNode(elem, NilNode))
  }

  val filteredList = list.filter(even)
  println(s"Filtered list:  $filteredList")

  val squaredList = list.map(square)
  println(s"Squared list: $squaredList")

  val duplicatedList = list.flatMap(duplicate)
  println(s"Duplicated list: $duplicatedList")


  // --------------------------

  sealed trait Node[+T] {
    def isEmpty: Boolean
    def head: T
    def tail: Node[T]

    def add[U >: T](value: U): ValueNode[U] = ValueNode(value, this)

    def addAll[U >: T](other: Node[U]): Node[U] = other match {
      case NilNode => this
      case ValueNode(h, t) => ValueNode(h, this).addAll(t)
    }

    def filter(p: MyPredicate[T]): Node[T] = this match {
      case NilNode => NilNode
      case ValueNode(h, t) if p.test(h) => ValueNode(h, t.filter(p))
      case ValueNode(_ , t) => t.filter(p)
    }

    def map[U](f: MyTransformation[T, U]): Node[U] = this match {
      case NilNode => NilNode
      case ValueNode(h, t) => ValueNode(f.transform(h), t.map(f))
    }

    def flatMap[U](f: MyTransformation[T, Node[U]]): Node[U] = this match {
      case NilNode => NilNode
      case ValueNode(h, t) => f.transform(h).addAll(t.flatMap(f))
    }

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

  case class ValueNode[T](override val head: T, override val tail: Node[T]) extends Node[T] {
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

  trait MyPredicate[-T] {
    def test(elem: T): Boolean
  }

  trait MyTransformation[-T, U] {
    def transform(elem: T): U
  }
}
