/* Задача: Случайное целое число от min до max. Важность: 2.

Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).
Любое число из интервала min..max должно появляться с одинаковой вероятностью.

*/

let min = +prompt("Введите минимум диапазона: ","");
let max = +prompt("Введите максимум диапазона: ","");
random_integer(min, max);

function random_integer (min, max) {

// получаем случайное число от (min-0.5) до (max+0.5)
let rand_int = min -0.5 + Math.random() * (max-min +1);

return alert("Сгенерированное целое число:" + Math.round(rand_int));
}