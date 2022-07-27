import 'dart:convert';

void main() {
  String rawJson = '{"name": "Andrei", "age": 25}';

  var parsedJson = json.decode(rawJson);

  Person person = Person.fromJson(parsedJson);

  print(person);
}

class Person {
  String? name;
  int? age;

  Person(this.name, this. age);

  Person.fromJson(Map<String, dynamic> parsedJson) {
    name = parsedJson['name'];
    age = parsedJson['age'];
  }

  @override
  String toString() {
    return "Person($name, $age)";
  }
}