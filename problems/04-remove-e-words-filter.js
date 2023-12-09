/*
Write a function `removeEWords(sentence)` that accepts a sentence string as an
arg. The function should return a new string, containing only the words that
don't have the letter "e" in them.

Solve this using Array's `filter()` method.

Examples:

console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'

*/
// split sentence into words
//  filter through words that includes a lowercased e
// return joined sentence

let removeEWords = function(sentence) {
    let words = sentence.split(' ');

  let filtered = words.filter(word => {

   if(!word.toLowerCase().includes('e')) {
    return word;
   }

   });

 return filtered.join(' ');
};

console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = removeEWords;
} catch (e) {
  module.exports = null;
}
