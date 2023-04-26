/* Задача:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
Если объект salaries пуст, то результат должен быть 0.
*/

'use strict';
let salaries = {
    John: 1000,
    Ann: 1250,
    Pete: 1180,
}

let sum = 0; 
for (let key in salaries) {
    sum = sum + salaries[key];
    /*
    Включаем эти строчки, если надо отладить код: 
    alert (`Сумма зарплат: ${sum}`);
    debugger;
    */
}
alert (`Сумма зарплат: ${sum}$`);

/*
Решение в учебнике:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
alert(sum); // 390
*/