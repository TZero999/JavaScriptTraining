//Есть один интересный трюк:

let a = 0;
console.log (Boolean(a)); // Даст нам false

let b = "0";
console.log (Boolean(b)); // Даст нам true

console.log (a==b); // Даст нам true.

/* Здесь применяются разные наборы правил. Равенство (==) преобразует значения, используя числовое преобразование, поэтому "0" становится 0.
Однако явное преобразование с помощью Boolean работает иначе:

Boolean:
0, null, undefined, NaN, ""	                false
Любое другое значение	                    true
*/