package oop

object Generics extends App {
  val boxedInt = new BoxedValue[Int](4)
  println(boxedInt.get)

  val boxedString = BoxedValue("Andrei")
  println(boxedString.get)


  // --------------------------------------

  // Generic types (classes, traits)
  // NOTE: objects cannot have type params (cannot be generic)

  class BoxedValue[T](value: T) {
    def get: T = value
    def set(value: T): BoxedValue[T] = new BoxedValue(value)

    // If I put in a super-type into my box, the box type param
    // must also change to match the supertype
    //
    // EXAMPLE: If I put an Animal into a box of Cat I end up with
    // a box of Animal
    def _set[U >: T](value: U): BoxedValue[U] = new BoxedValue(value)
  }

  // type-parameterized (i.e. generic) methods
  object BoxedValue {
    def apply[T](value: T): BoxedValue[T] = new BoxedValue(value)
  }

  // -----------------[ Type variance ]-----------------
  class Animal
  class Cat extends Animal

  // COVARIANCE: BoxedValue[Cat] extends BoxedValue[Animal]
  class MyList[+T]
  val list: MyList[Animal] = new MyList[Cat]

  // CONTRA-VARIANCE: BoxedValue[Animal] extends BoxedValue[Cat]
  class Trainer[-T]
  val trainer: Trainer[Cat] = new Trainer[Animal]

  // INVARIANCE: Neither of the above
  class InvariantBoxedValue[T]

  // ----------------[ Bounded types ]------------------

  // Upper-bounded types
  class Cage[T <: Animal](animal: T)
  val cage = new Cage(new Cat)

  // Lower-bounded type
  class CatTrainer[T >: Cat](of: T) {
    // We want a trainer that is either a cat specialist or a generalist
    // (not a dog specialist for example)
  }
  val catTrainer = new CatTrainer(new Animal)
}
