void main() {
  var p = Person("Andrei");

  // "private" in Dart is only at the lib. level not class level. 
  // We are still able to access iVars starting with '_' if we are in the same lib.
  print(p._name);
}

class Person {
  String _name;

  Person(String name)
    : _name = name;
}