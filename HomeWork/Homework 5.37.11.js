/* Задача: Получить средний возраст, важность: 4

Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
*/
let min = 24;
let max = 48; 

let vasya = { name: "Вася", age: 25/*ageRandom(min, max)*/};
let petya = { name: "Петя", age: 30/*ageRandom(min, max)*/};
let masha = { name: "Маша", age: 29/*ageRandom(min, max)*/};

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

function getAverageAge(arr) {
   let sumAge = arr.reduce( (average, arr) => average + arr.age, 0);
   //return Math.floor(sumAge/arr.length);
   return sumAge/arr.length;
};

/*function ageRandom(min,max) {
    let age = (Math.round(Math.random() * (max - min) + min));
    return age;
}
*/

//----------------------------------------------------------------------------------------------------------------------------------------------

/*
Долго просидел над этой задачей, пытаясь придумать функцию, которая бы заменяла уже прописанный нами возраст
на рандомную величину. 
Увы, не получилось. Получилось только сразу генерировать рандомный возраст и потом уже возвращать среднее арифметическое.

Предполагаю, что всю тему массивов надо перечитывать. И дай Бог, чтобы не весь учебник.
*/
