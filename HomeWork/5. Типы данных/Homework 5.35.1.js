/* Задача
Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
*/

'use strict'
let ucFirst = function (str, str_m){
    str_m = str[0].toUpperCase() + str.slice(1);
    return str_m;
}

let str = prompt("Введите слово: ","вася");

if (!str) {
    alert ("Некорректный ввод.");
} else {
    alert (ucFirst (str));
};

//Изначально не проверял "на пустую строку", т.к. в тексте задачи об этом речи не было.