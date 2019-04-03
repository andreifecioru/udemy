package oop

object Inheritance extends App {

  val employee = new Employee("Andrei", 500, 38)
  println(employee.greet)
  println(s"Employee age: ${employee.age}")

  // -------------------------------

  /*
     Scala supports single-inheritance model (can inherit a single class) but
     the mechanism can be enhanced by inheriting multiple "traits".
   */

  class Person(val name: String, val age: Int) {
    // Auxiliary constructor.
    def this(name: String) = this(name, 0)

    // This method is only accessible in child classes.
    protected def _greet: String = s"Hi, stranger!"
  }

  // When inheriting a class with params we need to point to one of its constructors.
  class Employee(name: String,
                 salary: Int,
                 override val age: Int // Can also override fields directly in constructor.
                ) extends Person(name) {
    // Can override methods from superclass.
    override protected def _greet: String =
      // Access methods/fields in superclass.
      s"${super._greet} Get to work!"

    // Can also override fields.
    // override def age: Int = -1

    def greet: String = _greet
  }

  /*
    Limiting overriding:
      - use 'final' on member (prevents overriding)
      - use 'final' on class (prevents inheritance)
      - use 'sealed' on class/trait (allows inheritance only in the same file)
   */

}
