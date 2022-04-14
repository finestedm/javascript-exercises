const add = function (num1, num2) {
  return (num1 + num2)
};

const subtract = function (num1, num2) {
  return (num1 - num2)
};

// const sum = function (array) {
//   var sum = 0;
//   for (i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum
// };


const sum = function (array) {
  return array.reduce((sum, nextItem) => sum + nextItem, 0);
};

// const multiply = function (array) {
//   var sum = 1;
//   for (i = 0; i < array.length; i++) {
//     sum *= array[i];
//   };
//   return sum
// };

const multiply = function (array) {
  return array.reduce((total, nextItem) => total * nextItem);
};

const power = function (num1, num2) {
  return (num1 ** num2)
};

const factorial = function (num1) {
  var fact = 1;
  for (i = num1; i > 0; i--) {
    fact *= i;
  };
  return fact
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
