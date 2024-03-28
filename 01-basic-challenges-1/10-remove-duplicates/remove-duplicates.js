// Approach 1
const removeDuplicates = (arr) => {
  const arrayToReturn = [];
  arr.forEach((item) => {
    if (!arrayToReturn.includes(item)) {
      arrayToReturn.push(item);
    }
  });
  return arrayToReturn;
};

//Approach 2 (Use Set to remove duplicates)
const removeWithSet = (arr) => {
  return Array.from(new Set(arr));
};

module.exports = {
  removeDuplicates: removeDuplicates,
  removeWithSet: removeWithSet,
};
