// Approach 1 - loop through the string
const countOccurences = (string, char) => {
  const caseInsensitiveString = string.toLowerCase().trim();
  const caseInsensitiveChar = char.toLowerCase();

  let occurences = 0;

  for (const item of caseInsensitiveString) {
    item === caseInsensitiveChar ? ++occurences : '';
  }

  return occurences;
};

//Approach 2 - use split() and reduce() functions
const countOccurencesSplit = (string, char) => {
  const caseInsensitiveString = string.toLowerCase().trim();
  const caseInsensitiveChar = char.toLowerCase();

  const occurences = caseInsensitiveString.split('').reduce((accum, item) => {
    return item === caseInsensitiveChar ? ++accum : accum;
  }, 0);

  return occurences;
};

module.exports = {
  countOccurences,
  countOccurencesSplit,
};
