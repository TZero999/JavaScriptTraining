/* Задача: Выделить число. Важность: 4.

Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

*/

let str = prompt("Введите стоимость со знаком валюты: ","$120");
alert (extractCurrencyValue(str));

function extractCurrencyValue(str) {
return Number(str.slice(1));
};