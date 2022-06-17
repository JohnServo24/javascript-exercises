const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

// total -> the accumulator
// It stores the value of the previous iteration of the loop
// .reduce is basically a magic for loop
// the 2nd argument is the initial value of the accumulator
const sum = arr => {
  const newArr = arr.reduce((total, item) => total + item, 0);

  return newArr;
};

const multiply = arr => {
  const newArr = arr.reduce((total, item) => total * item, 1);

  return newArr;
};

const power = (a, b) => a ** b;

// I used recursion just like what I've learned in computer science
// If a = 0, then return 1 since 0! = 1
// If its not 0, then subtract the number by 1 all the way down
// and multiply all the way up
// OLD
// const factorial = a => a === 0 ? 1 : a === 1 ? a : a * factorial(a - 1);

// better code
const factorial = a => a === 0 ? 1 : a * factorial(a-1);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
