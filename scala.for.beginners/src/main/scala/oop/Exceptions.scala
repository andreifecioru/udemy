package oop

object Exceptions extends App {
  /*
     Throwable classes extend Throwable class.
     There are 2 major types of throwables:
      - Exception -> app went wrong (like NPE)
      - Error -> system went wrong (like stack-overflow)
   */

  def getInt(withException: Boolean): Int = {
    if (withException) throw new RuntimeException("No int for you!")
    else 42
  }


  // try blocks are expressions
  val intValue = try {
    getInt(true)
  } catch {
    case e: RuntimeException =>
      println(e.getMessage)
      -1 // fallback value
  } finally {
    // Code will be executed no matter what
    // does not alter the return value (use it for side-effects)
    println("Finally...")
  }

  println(intValue)
}
