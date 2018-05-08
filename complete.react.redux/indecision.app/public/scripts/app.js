'use strict';

var add = function add(a, b) {
  console.log(arguments);
  return a + b;
};

var addArrow = function addArrow(a, b) {
  // arguments is no longer available in arrow functions
  // console.log(arguments);
  return a + b;
};

console.log(add(55, 1));

// this is no longr bound with arrow functions
var user = {
  name: 'Andrei',
  cities: ['Bucharest', 'Timisoara'],

  // !!! don't use arrow functions when defining methods
  // (you'll lose the this binding)
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    var that = this;
    this.cities.forEach(function (city) {
      // this is no longer bound (we need to use that)
      console.log('[ES5]', that.name, 'lived in', city);
    });

    // with arrow functions, we no longer need the workaround
    this.cities.forEach(function (city) {
      // this is no longer bound (we need to use that)
      console.log('[ES6]', _this.name, 'lived in', city);
    });
  },

  // we can use the ES6 method definition syntax
  // (we have access to this and arguments bindings)
  getPlacesLived: function getPlacesLived() {
    var _this2 = this;

    return this.cities.map(function (city) {
      return '[ES6 - method] ' + _this2.name + ' lived in ' + city;
    });
  }
};

user.printPlacesLived();
user.getPlacesLived().forEach(function (msg) {
  return console.log(msg);
});

// CHALLENGE
var multiplier = {
  numbers: [1, 2, 3, 4, 5],
  multiplyBy: 10,
  multiply: function multiply() {
    var _this3 = this;

    return this.numbers.map(function (number) {
      return _this3.multiplyBy * number;
    });
  }
};

console.log('[CHALLENGE]', multiplier.multiply());
