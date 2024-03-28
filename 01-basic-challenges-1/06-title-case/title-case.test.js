const { titleCase } = require('./title-case');

test('Testing title case of a string', () => {
  expect(titleCase("I'm a little tea pot")).toBe("I'm A Little Tea Pot");
  expect(titleCase('sHORT AnD sTOUt')).toBe('Short And Stout');
});
