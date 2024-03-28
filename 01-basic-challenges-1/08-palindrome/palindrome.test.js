const { isPalindrome } = require('./palindrome');

test('Palindrome unit tests', () => {
  expect(isPalindrome('madam')).toBe(true);
  expect(isPalindrome('racecar')).toBe(true);
  expect(isPalindrome('hello')).toBe(false);
  expect(isPalindrome('')).toBe(true);
  expect(isPalindrome('candy')).toBe(false);
});
