/*
Write a function `snakeToCamel` that takes in a snake_cased string and returns a
PascalCased version of the string. snake_case is where each word is separated
with underscores(`_`). PascalCase is a string where the first char of each word
is capital, all other chars lowercase.

Solve this using `array.map()`.

Examples:

console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'

*/
// lowercase the entire str
// split str to get words
// map through the words
// uppercase the first letter word[0] then slice for the rest of the word
// return the joined with no spaces
function snakeToCamel(str) {
str = str.toLowerCase();
let words = str.split("_");
let newWords = words.map(function(word) {
    let firstChar = word[0].toUpperCase();
    let restOfWord = word.slice(1);
    return firstChar + restOfWord;
})
return newWords.join("");
}
console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = snakeToCamel;
} catch (e) {
    module.exports = null;
}
