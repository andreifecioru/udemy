const add = function(a, b) {
  console.log(arguments);
  return a + b;
};

const addArrow = (a, b) => {
  // arguments is no longer available in arrow functions
  // console.log(arguments);
  return a + b;
};

console.log(add(55, 1));

// this is no longr bound with arrow functions
const user = {
  name: 'Andrei',
  cities: ['Bucharest', 'Timisoara'],

  // !!! don't use arrow functions when defining methods
  // (you'll lose the this binding)
  printPlacesLived: function () {
    const that = this;
    this.cities.forEach(function(city) {
      // this is no longer bound (we need to use that)
      console.log('[ES5]', that.name, 'lived in', city);
    });

    // with arrow functions, we no longer need the workaround
    this.cities.forEach((city) => {
      // this is no longer bound (we need to use that)
      console.log('[ES6]', this.name, 'lived in', city);
    });

  },

  // we can use the ES6 method definition syntax
  // (we have access to this and arguments bindings)
  getPlacesLived() {
    return this.cities.map((city) => '[ES6 - method] ' + this.name + ' lived in ' + city);
  } 
};

user.printPlacesLived();
user.getPlacesLived().forEach((msg) => console.log(msg));

// CHALLENGE
const multiplier = {
  numbers: [1, 2, 3, 4, 5],
  multiplyBy: 10,
  multiply() {
    return this.numbers.map((number) => this.multiplyBy * number);
  }
}

console.log('[CHALLENGE]', multiplier.multiply());