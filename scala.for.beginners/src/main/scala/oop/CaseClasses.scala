package oop

object CaseClasses extends App {
  case class Person(name: String, age: Int)

  // CCs are used for implementing light (immutable) data structures

  // CC params are val fields
  // CCs have companion objects defined (no need to use new)
  val jim = Person("Jim", 30)
  println(jim.age)

  // CC provide a toString() implementation
  println(jim)

  // CC provide implementations for hashCode() and equals()
  val jim2 = Person("Jim", 30)
  println(jim == jim2) // true (it would have been false for simple classes)

  // CC provide a copy() method
  val olderJim = jim.copy(age = 50)
  println(olderJim)

  // CCs are serializable (useful when dealing with distributed systems)

  // CCs have extractor patterns defined (to be used in pattern matching)
  olderJim match {
    case Person(_, age) if age > 40 => println("Jim is older")
    case _ => println("Jim is younger")
  }

  // Case Objects (singleton CCs)
  // You can hold app-wide constants and utility function (i.e. utility classes in Java)
  case object MyConstants {
    val PI = 3.14
  }
  println(MyConstants.PI)


}
