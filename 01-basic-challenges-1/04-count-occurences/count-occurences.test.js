const { countOccurences } = require('./count-occurences');

test('Count occurences of a char in a string', () => {
  expect(countOccurences('Test', 'e')).toBe(1);
});
