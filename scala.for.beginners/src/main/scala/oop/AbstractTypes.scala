package oop

object AbstractTypes extends App {

  val dog = new Dog
  println(dog.eat)

  val croc = new Crocodile
  println(croc eat dog)


  // ---------------------------------------

  /*
    You can define abstract types (cannot be instantiated) via either
    abstract classes or traits.
  */

  abstract class Animal {
    // You can have both abstract fields and methods
    val species: String
    def eat: String
  }

  class Dog extends Animal {
    override val species: String = "canine"
    override def eat: String = "crunch, crunch"
  }

  trait Carnivore {
    def eat(animal: Animal): String
  }

  // You can inherit one or multiple traits
  class Crocodile extends Animal with Carnivore {
    override val species: String = "reptile"

    override def eat: String = "hop, hop"

    override def eat(animal: Animal): String = s"I am a $species and I am eating a ${animal.species}."
  }

  /*
    Both traits and abstract classes can have both abstract and non-abstract members.
    However:
      - traits cannot have constructor params
      - you can inherit from multiple traits, but only a single class
      - traits usually encapsulate "behavior" (i.e. methods)
  */
}
