const isPalindrome = (str) => {
  const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let reverseString = formattedStr.split('').reverse().join('');
  if (formattedStr === reverseString) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  isPalindrome: isPalindrome,
};
