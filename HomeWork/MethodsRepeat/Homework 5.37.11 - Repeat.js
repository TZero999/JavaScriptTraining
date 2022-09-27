/* Задача: Получить средний возраст. Важность: 4.

Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

*/

let vasya  = { name: "Вася", age: 25 };
let petya  = { name: "Петя", age: 30 };
let masha  = { name: "Маша", age: 28 };
let vlad   = { name: "Влад", age: 32 };
let polina = { name: "Полина", age: 25 };

let array = [ vasya, petya, masha, vlad, polina ];

alert( `Средний возраст сотрудников: ${getAverageAge(array)} лет`); // (25 + 30 + 28 + 32 + 25) / 5 = 28

function getAverageAge(arr) {
sum = arr.reduce( (sum, curent) => sum + curent.age, 0 );
return (sum/array.length)
}

/*
Убедился, что записывать начальное значение действительно крайне важно.
Так, если в конце arr.reduce убрать 0, получим sum == [object Object]30283225.
*/