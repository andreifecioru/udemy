package oop

object OopBasics extends App {

  val writer = new Writer("John", "Doe", 1970)
  val novel = new Novel("Some book", 1990, writer).copy(2000)

  println(novel)

  val counter = new Counter(100)
  println(
    counter.increment
      .decrement
      .increment(50)
      .decrement(30)
  )

  // --------------------------------------

  class Writer(firstName: String, lastName: String, val yearOfBirth: Int) {
    def fullName: String = s"$firstName $lastName"


    override def toString: String = s"Writer: $fullName (born $yearOfBirth)"
  }


  class Novel(title: String, yearOfRelease: Int, author: Writer) {
    def authorAge: Int = {
      require(author.yearOfBirth < yearOfRelease)
      yearOfRelease - author.yearOfBirth
    }

    def isWrittenBy(writer: Writer): Boolean = author.fullName == writer.fullName

    def copy(yearOfRelease: Int) = new Novel(title, yearOfRelease, author)

    override def toString: String = s"Novel: $title ($yearOfRelease) by $author"
  }


  class Counter(value: Int) {
    def currentCount: Int = value

    def increment: Counter = new Counter(value + 1)
    def increment(amount: Int) = new Counter(value + amount)


    def decrement: Counter = new Counter(value - 1)
    def decrement(amount: Int) = new Counter(value - amount)

    override def toString: String = s"Counter: $value"
  }
}


