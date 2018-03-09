'use strict';

// function square(x) {
//   return x * x;
// }
//
// console.log(square(3))
//
// const squareArrow = (x) => {
//   return x * x;
// }
//
// const squareArrow = (x) => x * x;
//
// console.log(squareArrow(5))


// getFirstName('Sergio Barker')
// create regular arrow function
// create arrow function using shorthand syntax

// const getFirstName = (fullName) => {
//   return fullName.split(' ')[0];
// }

var getFirstName = function getFirstName(fullName) {
  return fullName.split(' ')[1];
};

console.log(getFirstName('Sergio Barker'));
