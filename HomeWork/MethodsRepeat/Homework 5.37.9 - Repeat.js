/* Задача: Отсортировать пользователей по возрасту. Важность: 5.

Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

*/

let vasya  = { name: "Вася", age: 25 };
let petya  = { name: "Петя", age: 30 };
let masha  = { name: "Маша", age: 28 };
let vlad   = { name: "Влад", age: 32 };
let polina = { name: "Полина", age: 23 };

let arr = [ vasya, petya, masha, vlad, polina ];

alert(sortByAge(arr));

alert(arr); // Полина, Вася, Маша, Петя, Влад

function sortByAge(arr) {
    arr.sort ((a, b) => a.age - b.age);
}