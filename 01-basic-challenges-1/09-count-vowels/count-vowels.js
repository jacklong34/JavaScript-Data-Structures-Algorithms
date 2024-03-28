const countVowels = (str) => {
  let vowelCount = 0;
  const formattedStr = str.toLowerCase();
  for (let i = 0; i < formattedStr.length; i++) {
    switch (formattedStr[i]) {
      case 'a':
        vowelCount += 1;
        break;
      case 'e':
        vowelCount += 1;
        break;
      case 'i':
        vowelCount += 1;
        break;
      case 'o':
        vowelCount += 1;
        break;
      case 'u':
        vowelCount += 1;
        break;
    }
  }
  return vowelCount;
};

module.exports = {
  countVowels: countVowels,
};
