const add = (intA, intB) =>  intA + intB;

const subtract = (intA, intB) => intA - intB;

const sum = array => {
  let total = 0;
  for (let index = 0; index < array.length; index++) {
    total += array[index];
  }
  return total;
};

const multiply = array => {
  let total = 1;
  for (let index = 0; index < array.length; index++) {
    total *= array[index];
  }
  return total;
};

const power = (intA, intB) => intA ** intB;

const factorial = function(num) {
  let total = 1;
  for (let index = 1; index <= num; index++) {
    total *= index;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
