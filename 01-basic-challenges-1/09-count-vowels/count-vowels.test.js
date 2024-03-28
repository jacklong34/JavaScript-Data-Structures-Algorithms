const { countVowels } = require('./count-vowels');

test('Count Vowels Unit Tests', () => {
  expect(countVowels('Hello')).toBe(2);
  expect(countVowels('why')).toBe(0);
  expect(countVowels('Mississippi')).toBe(4);
});
