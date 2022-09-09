/* Задача:
Напишите функцию randomInteger(min, max), 
которая генерирует случайное целое (integer) число от min до max (включительно).
Любое число из интервала min..max должно появляться с одинаковой вероятностью.
*/

function randomInteger(min, max) {
let answer = min - 0.5 + Math.random() * (max - min + 1);
return Math.round(answer);
}

let min = +prompt("Введите число - минимум: ","");
let max = +prompt("Введите число - максимум: ","");
alert(randomInteger(min, max));

/* Сначала сделал через Math.trunc, т.к. неправильно прочёл задание - подумал, что не включительно.
Получил такой код: 

function randomInteger(min, max) {
let answer = min + Math.random() * (max - min);
return Math.round(answer);
}

let min = +prompt("Введите число - минимум: ","");
let max = +prompt("Введите число - максимум: ","");
alert(randomInteger(min, max));

*/




/*
Но автор говорит, что здесь загвоздка в строчке "Любое число из интервала min..max должно появляться с одинаковой вероятностью"

Срединные числа (например 2 для min = 1 и max = 3) будет появляться в 2 раза чаще.
Это происходит потому, что метод Math.round() округляет числа следующим образом:
число от 1    ... до 1.4999999999  округлится до 1
число от 1.5  ... до 2.4999999999  округлится до 2
число от 2.5  ... до 2.9999999999  округлится до 3


Затем автор приводит 2 примера ПРАВИЛЬНЫХ решений:

"Есть много правильных решений этой задачи. Одно из них – правильно указать границы интервала.
Чтобы выровнять интервалы, мы можем генерировать числа от 0.5 до 3.5,
это позволит добавить необходимые вероятности к min и max:"

function randomInteger(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

alert( randomInteger(1, 3) );

ИЛИ ЖЕ:
Другое правильное решение – это использовать Math.floor для получения случайного числа от min до max+1:

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

alert( randomInteger(1, 3) );

*/