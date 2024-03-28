const calculator = require('./calculator');

const result1 = calculator(10, 5, '+');
const result2 = calculator(10, 5, '-');
const result3 = calculator(10, 5, '*');
const result4 = calculator(10, 5, '/');

console.log(result1, result2, result3, result4);

const invalidOperator = calculator(10, 10, '(');
console.log(invalidOperator);
