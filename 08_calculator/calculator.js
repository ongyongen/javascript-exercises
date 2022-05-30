const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
};

const multiply = function(arr) {
  let product = 1;
  for (let num of arr) {
    product *= num
  }
  return product
};

const power = function(base, power) {
  let product = 1;
  let i = 0;
  while (i < power) {
    product *= base;
    i += 1;
  }
	return product
};

const factorial = function(num) {
  if (num == 0) {
    return 1
  } else {
    return num * factorial(num-1) // num * (num - 1) * (num - 2) .. * 1 * 1 
  }
	
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
