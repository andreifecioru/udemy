package basics

import scala.annotation.tailrec

object Recursion extends App {
  println(s"String concat: 'andrei_' x 5: ${stringConcat("andrei_", 5)}")

  println(s"fibonacci(10): ${fibonacci(10)}")

  println(s"Is 11 prime? ${isPrime(11)}")
  println(s"Is 33 prime? ${isPrime(33)}")
  println(s"Is 37 prime? ${isPrime(37)}")

  def stringConcat(in: String, n: Int): String = {
    require(n >= 1)

    @tailrec
    def concatHelper(acc: String, _n: Int): String = {
      if (_n <= 1) acc
      else concatHelper(s"$acc$in", _n - 1)
    }

    concatHelper(in, n)
  }

  def fibonacci(n: Int): Int = {
    require(n >= 0)

    @tailrec
    def fibHelper(_n: Int, acc: (Int, Int)): Int = {
      if (n == 0) acc._2
      else if (_n == 1) acc._1
      else fibHelper(_n - 1, (acc._1 + acc._2, acc._1))
    }

    fibHelper(n, (1, 0))
  }

  def isPrime(n: Int): Boolean = {
    require(n > 1)

    @tailrec
    def primeHelper(i: Int, acc: Boolean): Boolean = {
      if (acc) false
      else if (i <= 2) true
      else primeHelper(i - 1, n % i == 0)
    }

    primeHelper(n / 2, acc = false)
  }
}
