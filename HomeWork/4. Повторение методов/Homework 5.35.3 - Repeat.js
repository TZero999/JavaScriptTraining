/* Задача: Усечение строки. Важность: 5.

Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и,
если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

*/

let str = prompt("Введите строку: ","Вот, что мне хотелось бы сказать на эту тему:");
let maxlength = +prompt("Введите максимальную длину строки: ","20");
alert ("Усечённая строка: " + truncate (str, maxlength));


function truncate (str, maxlength) {
let str2 = '\u2026';

if (maxlength === 0 || maxlength > str.length) return str;

str = str.substr(0, maxlength) + str2;
return str;
};

/* 
Сделал методом "от противного".  
*/