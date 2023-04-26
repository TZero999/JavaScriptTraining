/* Задача:
Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
*/

'use strict';

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
console.log("Значения свойств объекта до умножения на 2: ", menu); // выводим меню, должны получить 400, 600 и My menu.
MultiplyNumeric(menu);

function MultiplyNumeric() {
    for (let key in menu) {
        if (typeof (menu[key]) == 'number') {
          menu[key] = menu[key] *2;
        }
    }
}
console.log("Значения свойств объекта после умножения на 2: ", menu); // выводим меню, должны получить 400, 600 и My menu.

/*
Решение авторов учебника:

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}

*/