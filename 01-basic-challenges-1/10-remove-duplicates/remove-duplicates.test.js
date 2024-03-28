const { removeDuplicates } = require('./remove-duplicates');

test('Remove Duplicates Tests', () => {
  expect(removeDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
  expect(removeDuplicates([1, 1, 1, 1, 1, 1])).toEqual([1]);
  expect(
    removeDuplicates([1, 2, 3, 4, true, 'hello', true, 'hello', 2, 3])
  ).toEqual([1, 2, 3, 4, true, 'hello']);
});
