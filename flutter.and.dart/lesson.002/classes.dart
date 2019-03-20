void main() {
  Person p = new Person("Andrei");

  p.printName();
}

class Person {
  String firstName;

  Person(this.firstName);

  void printName() {
    print("First name is: $firstName");
  }
}