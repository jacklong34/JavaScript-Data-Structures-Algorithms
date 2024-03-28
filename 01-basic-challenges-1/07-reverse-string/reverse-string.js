// 1st Attempt
const reverseString = (stringToReverse) => {
  const splitString = stringToReverse.split(' ');
  let reverseArray = [];
  splitString.forEach((word) => {
    let reversedWord = '';
    for (let i = word.length - 1; i > -1; i--) {
      reversedWord += word[i];
    }
    reverseArray.push(reversedWord);
  });
  return reverseArray.join(' ');
};

// Optimized Solution (For Loop)
const opimizedReverse = (str) => {
  let reverseString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i];
  }
  return reverseString;
};

// Optimized Solution (JS Methods)
const mostOptimizedReverse = (str) => {
  return str.split('').reverse().join('');
};

module.exports = {
  reverseString: reverseString,
  mostOptimizedReverse: mostOptimizedReverse,
};
