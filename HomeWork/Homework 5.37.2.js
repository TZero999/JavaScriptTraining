/* Задача:
Напишите функцию filterRange(arr, a, b), которая принимает массив arr,
ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

Функция должна возвращать новый массив и не изменять исходный.

Например:

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (совпадающие значения)
alert( arr ); // 5,3,8,1 (без изменений)
*/

let arr = [5, 3, 8, 1, 4, 6, 2];
filterRange(arr, 1, 4);
sorting(filterResult);
alert("Отфильтрованный массив: " + filterResult ); // 3,1 (совпадающие значения)
alert("Отфильтрованный и отсортированный массив: " + sortedResult ); // 1, 3 (отсортированные значения отфильтрованного массива)
alert("Оригинальный массив: "+ arr ); // 5,3,8,1 (без изменений)




function filterRange(arr, a, b) {
let arr2 = arr.concat();
return filterResult = arr2.filter(element => element >= a && element <=b);
};

function sorting(filterResult) {
let arr3 = filterResult.concat();
compareNumeric(arr3);
return sortedResult = arr3.sort(compareNumeric);
}

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
};

/*
Я даже не настолько безнадёжен, что сумел сделать этот пример сам, да ещё и усложнить его дополнительным требованием.
Что по отличиям:

1) Не за чем было делать первый concat, хотя в условиях задачи сделан упор на "Новый массив", что
ввело меня в заблкждение.

2) arr2.filter(element => element >= a && element <=b) - лучше было использовать скобки после element =>.
Это улучшило бы читабельность.

Решение автора:
function filterRange(arr, a, b) {
  // добавлены скобки вокруг выражения для улучшения читабельности
  return arr.filter(item => (a <= item && item <= b));
}
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (совпадающие значения)
alert( arr ); // 5,3,8,1 (без изменений)
*/