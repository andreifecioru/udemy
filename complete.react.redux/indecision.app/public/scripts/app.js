'use strict';

var square = function square(x) {
  return x * x;
};

// arrow functions are always annonymous
// if you want to reference arrow functions 
// you need to assign them to variables
var squareArrow = function squareArrow(x) {
  return x * x;
};

console.log('square(5) = ', square(5));
console.log('squareArrow(5) = ', squareArrow(5));

// arrow function expression
var squareArrowExpr = function squareArrowExpr(x) {
  return x * x;
};
console.log('squareArrowExpr(5) = ', squareArrowExpr(5));

// CHALLENGE
var getFirstName = function getFirstName(fullName) {
  return fullName.split(' ')[0];
};
console.log('First name: ', getFirstName('Andrei Fecioru'));
