const { countOccurences, countOccurencesSplit } = require('./count-occurences');

let string = 'Hello Liam!';

const result = countOccurences(string, 'l');
console.log(result);

const resultSplit = countOccurencesSplit(string, 'l');
console.log(resultSplit);
