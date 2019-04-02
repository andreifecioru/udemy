package oop

object MethodNotations extends App{
  val mary = new Person("Mary", 25)
  val tom = new Person("Tom", 45)

  // Instances as functions (callable instances)
  println(mary())
  println(mary("the rockstar"))

  // Prefix notation (for unary operators)
  println(!mary)

  // Infix notation (for binary operators)
  println(mary + tom)

  println(+mary)

  // ----------------------------

  class Person(val name: String, val age: Int) {
    // Callable instances
    def apply(): String = s"Hi, my name is $name."
    def apply(nickname: String): String = s"$name ($nickname)"

    // Unary operators [+, -, ~, !] (usable in prefix notation)
    def unary_! : String = s"Come here $name!"
    def unary_+ : Person = new Person(name, age + 1)

    // Binary operators (usable in infix notation)
    def +(other: Person): String = s"$name hangs with ${other.name}."

    override def toString: String = s"$name ($age years old)"
  }
}
