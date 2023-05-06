/* Задача:

Что выведет следующий код?
let fruits = ["Яблоки", "Груша", "Апельсин"];

let shoppingCart = fruits;
shoppingCart.push("Банан");

alert( fruits.length ); // ?
*/

let fruits = ["Яблоки", "Груша", "Апельсин"];

let shoppingCart = fruits;

shoppingCart.push("Банан");

alert( fruits.length ); // 4

/*
Автор: Потому, что массивы – это объекты. Обе переменные shoppingCart и fruits являются ссылками на один и тот же массив.

На само деле задание устное, просто оставлю это здесь для того, чтобы помнить о том, что массивы в JS - это частные случаи объектов.
*/
