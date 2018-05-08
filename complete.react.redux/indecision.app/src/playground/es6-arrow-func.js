const square = function (x) {
  return x * x;
};

// arrow functions are always annonymous
// if you want to reference arrow functions 
// you need to assign them to variables
const squareArrow = (x) => {
  return x * x;
}

console.log('square(5) = ', square(5));
console.log('squareArrow(5) = ', squareArrow(5));

// arrow function expression
const squareArrowExpr = (x) => x * x;
console.log('squareArrowExpr(5) = ', squareArrowExpr(5));

// CHALLENGE
const getFirstName = (fullName) => fullName.split(' ')[0];
console.log('First name: ', getFirstName('Andrei Fecioru'));