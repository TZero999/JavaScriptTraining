/* Задача: Сортировать по полю. Важность: 5.

У нас есть массив объектов, который нужно отсортировать:
Можно отсортировать его с помощью стрелочной функции.
о можно ли использовать замыкание, чтобы вместо функции мы просто писали byField(fieldName)?

То есть вместо функции мы просто можем написать byField(fieldName).
Напишите функцию byField, которая может быть использована для этого.

*/

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

/*
обычная сортировка выглядела бы так:

По имени (Ann, John, Pete):
users.sort((a, b) => a.name > b.name ? 1 : -1);

По возрасту (Pete, Ann, John):
users.sort((a, b) => a.age > b.age ? 1 : -1);
*/

users.sort(byField('name'));
users.sort(byField('age'));

function byField(field) {
    return a[field] > b[field] ? 1: -1;
}