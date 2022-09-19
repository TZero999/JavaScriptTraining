/* Задача: Отсортировать пользователей по возрасту, важность: 5
Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя

*/

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя

console.log(
(arr[0].name), // Вася
(arr[1].name), // Маша
(arr[2].name), // Петя
);

function sortByAge(arr) {
arr.sort((compare));
};

function compare(a, b) {
    if (a.age > b.age) return 1; // если первое значение больше второго
    if (a.age == b.age) return 0; // если равны
    if (a.age < b.age) return -1; // если первое значение меньше второго
}

/* У sort-а всё ещё куча загадок для меня. Я решил эту задачу, старым добрым методом с compare, но надо
понять, как sort вопринимает эти 1, 0 и -1.
*/

/* Решение автора, конечно же, куда более лаконичное:

function sortByAge(arr) {
  arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

// теперь отсортировано: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя

*/