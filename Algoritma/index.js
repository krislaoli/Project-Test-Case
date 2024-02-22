console.log(" ALGORITMA 1 ");
function reverseAlphabet(str) {
  const reversed = str.split("").reverse().join("");
  const alphabetIndex = reversed.search(/[a-z]/i);
  const reversedAlphabet = reversed.slice(alphabetIndex);
  const reversedNumber = parseInt(reversed.slice(0, alphabetIndex), 10);
  return `${reversedAlphabet}${reversedNumber}`;
}

console.log(reverseAlphabet("NEGIE1"));

console.log(" ALGORITMA 2 ");
function longestWord(sentence) {
  const words = sentence.split(" ");

  let maxLength = 0;
  let longestWord = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
      longestWord = words[i];
    }
  }

  return longestWord;
}

const sentence = "Saya sangat senang mengerjakan soal algoritma";
console.log(longestWord(sentence));

console.log(" ALGORITMA 3 ");

function countOccurrences(input, query) {
  const counts = query.map(() => 0);
  for (let i = 0; i < input.length; i++) {
    const index = query.indexOf(input[i]);
    if (index !== -1) {
      counts[index]++;
    }
  }
  return counts;
}

const input = ["xc", "dz", "bbb", "dz"];
const query = ["bbb", "ac", "dz"];

console.log(countOccurrences(input, query));

console.log(" ALGORITMA 4 ");

function calculateDiagonalDifference(matrix) {
  let diagonal1 = 0;
  let diagonal2 = 0;
  for (let i = 0; i < matrix.length; i++) {
    diagonal1 += matrix[i][i];
    diagonal2 += matrix[i][matrix.length - 1 - i];
  }
  return diagonal1 - diagonal2;
}

const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(calculateDiagonalDifference(matrix));
