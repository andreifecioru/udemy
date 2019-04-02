package basics

import scala.annotation.tailrec

object Functions extends App {
  // exercise 1
  println(s"[EX 1]: ${greeting("Andrei", 37)}")

  // exercise 2
  println(s"[EX 2]: 3! = ${factorial(3)}")
  println(s"[EX 2]: 4! = ${factorial(4)}")

  def greeting(name: String, age: Int): String =
    s"Hi! My name is $name and I am $age years old."

  def factorial(n: Int): Int = {
    @tailrec
    def reduce(acc: Int, x: Int): Int = x match {
      case 1 => acc
      case _ => reduce(acc * x, x - 1)
    }

    reduce(1, n)
  }
}
