const getSum = require('./get-sum');

test('Calculating the sum of two numbers', () => {
  // Test case inputs
  const num1 = 5;
  const num2 = 7;

  //Call the function
  const result = getSum(num1, num2);

  //Check if the result is equal to the expected result
  expect(result).toBe(12);
});
