const { reverseString, mostOptimizedReverse } = require('./reverse-string');

test('Reverse String Test Cases', () => {
  expect(mostOptimizedReverse('hello')).toBe('olleh');
  expect(mostOptimizedReverse('Jack')).toBe('kcaJ');
  expect(mostOptimizedReverse('world')).toBe('dlrow');
  expect(mostOptimizedReverse('')).toBe('');
  expect(mostOptimizedReverse('Hello World')).toBe('dlroW olleH');
});
