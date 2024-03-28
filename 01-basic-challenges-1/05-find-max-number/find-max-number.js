// Solution 1
const findMaxNumber = (numbers) => {
  let maxNumber = 0;
  numbers.forEach((number) => {
    number >= maxNumber ? (maxNumber = number) : '';
  });
  return maxNumber;
};

module.exports = {
  findMaxNumber: findMaxNumber,
};

// Solution 2
const builtInJSMax = (numbers) => {
  return Math.max(...numbers);
};
