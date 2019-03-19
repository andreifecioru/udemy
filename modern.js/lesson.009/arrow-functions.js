const square = (num) => num * num

console.log(square(5))

const people = [{
    name: "Andrei",
    age: 38
  },
  {
    name: "Mike",
    age: 25
  },
  {
    name: "Jen",
    age: 44
  }
]

const underThirty = people.filter(person => person.age < 30)
console.log(underThirty)

const age38 = people.find(person => person.age === 38)
console.log(age38)

const car = {
  color: "red",

  // NOTE: arrow functions do not bind "this", so don't use them as methods
  // Use the "method" syntax instead.
  getSummary() {
    return `The car is ${this.color}`
  }
}

console.log(car.getSummary())