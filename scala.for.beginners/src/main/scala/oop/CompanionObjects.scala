package oop

object CompanionObjects extends App {
  val persons = Person("Mary", "John")

  val mary = persons.head
  val john = persons.last

  println(mary)
  println(john)

  // The 'Person' object is a singleton
  val p1 = Person
  val p2 = Person
  println(p1 == p2)

  // ---------------------------------
  /*
    Scala does not have "static" class-level fields. It emulates (and enhances) the "static"
    behavior via singleton/companion objects.
  */

  class Person(val name: String) {
    override def toString: String = s"Person: $name"
  }

  object Person { // defines a type + singleton instance
    // "static"-like fields
    val NUM_LEGS = 2

    // "static"-like methods
    def greet(person: Person): String = s"Hi, ${person.name}!"

    // factory methods
    def apply(names: String*): List[Person] = names.map(new Person(_)).toList
  }
}
