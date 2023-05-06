/* Задание: Java[^script]
У нас есть регулярное выражение /Java[^script]/.

Найдёт ли оно что-нибудь в строке Java? А в строке JavaScript?
*/

let regexp = /Java[^script]/;

let str = 'Java';
console.log(str.match(regexp)); // null

str = 'JavaScript';
console.log(str.match(regexp)); // [JavaS]

regexp = /Java[^script]/g;
console.log(str.match(regexp)); // [JavaS]

regexp = /Java[script]+/gi;
console.log(str.match(regexp)); // [JavaScript]