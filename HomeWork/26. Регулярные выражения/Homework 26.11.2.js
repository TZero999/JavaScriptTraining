/* Задание: Найти цвет в формате #abc или #abcdef

Напишите регулярное выражение, которое соответствует цветам в формате #abc или #abcdef.
То есть: # и за ним 3 или 6 шестнадцатеричных цифр.
*/

let regexp = /\#([0-9a-f]{3}){1,2}\b/gi;

let str = "color: #3f3; background-color: #AA00ef; and: #abcd";
alert( str.match(regexp) ); // #3f3 #AA00ef