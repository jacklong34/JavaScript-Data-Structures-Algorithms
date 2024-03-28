const titleCase = (sentence) => {
  return sentence
    .split(' ')
    .map((word) => {
      let updatedWord = '';
      for (let i = 0; i < word.length; i++) {
        i === 0
          ? (updatedWord += word[i].toUpperCase())
          : (updatedWord += word[i].toLowerCase());
      }
      return updatedWord;
    })
    .join(' ');
};

// Optimized Solution
const optimizedSolution = (words) => {
  words.toLowerCase().split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
};

module.exports = {
  titleCase: titleCase,
};
