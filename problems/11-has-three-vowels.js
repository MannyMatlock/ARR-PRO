/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

// let vowelCount= function(word){

//     word = word.split("")
//     let vowels = "aeiouAEIOU"
//     let sum = 0;
//     word.forEach((char)=>(vowels.includes(char)) ? sum++ : sum)
//     return sum;
// }

// let hasThreeVowels = function(string) {
//     return vowelCount(string) > 3;

// };
let hasThreeVowels = function(string) {
    let arr = string.split('');
    let vowels = 'aeiou';
    let filtered = arr.filter(char => {
        return vowels.includes(char);
    })


    let unique = ''
    filtered.forEach(vowel => {
        if (!unique.includes(vowel)) {
            unique+=vowel
        }
    })
    
    return unique.length >= 3;
};


console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
