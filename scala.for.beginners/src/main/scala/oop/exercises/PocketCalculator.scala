package oop.exercises

object PocketCalculator extends App {
  println(s"3 + 5: ${Calculator.add(3, 5)}")
  try {
    println(s"MAX_INT + 5: ${Calculator.add(Int.MaxValue, 5)}")
  } catch {
    case _: OverflowException => println("Number too large.")
  }

  println(s"3 - 5: ${Calculator.sub(3, 5)}")
  try {
    println(s"MIN_INT - 5: ${Calculator.sub(Int.MinValue, 5)}")
  } catch {
    case _: UnderflowException => println("Number too small.")
  }

  println(s"3 * 5: ${Calculator.mul(3, 5)}")
  try {
    println(s"MAX_INT + 5: ${Calculator.mul(Int.MaxValue, 5)}")
  } catch {
    case _: OverflowException => println("Number too large.")
  }

  println(s"3 / 5: ${Calculator.div(3, 5)}")
  try {
    println(s"3 / 0: ${Calculator.div(3, 0)}")
  } catch {
    case _: DivisionByZeroException => println("Division by zero")
  }

  // ------------------------------------
  case object Calculator {
    def add(x: Int, y: Int): Int = {
      val result = x.toLong + y
      if (result > Int.MaxValue) throw new OverflowException
      if (result < Int.MinValue) throw new UnderflowException
      result.toInt
    }

    def sub(x: Int, y: Int): Int = {
      val result = x.toLong - y
      if (result > Int.MaxValue) throw new OverflowException
      if (result < Int.MinValue) throw new UnderflowException
      result.toInt
    }

    def mul(x: Int, y: Int): Int = {
      val result = x.toLong * y
      if (result > Int.MaxValue) throw new OverflowException
      if (result < Int.MinValue) throw new UnderflowException
      result.toInt
    }

    def div(x: Int, y: Int): Double = {
      if (y == 0) throw new DivisionByZeroException
      x.toDouble / y
    }
  }

  class CalculatorException extends Exception
  class OverflowException extends CalculatorException
  class UnderflowException extends CalculatorException
  class DivisionByZeroException extends CalculatorException
}
