/* Задача: Перебираемые ключи. Важность: 5.

Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.

Но это не выходит:

let map = new Map();
map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");

Что надо сделать, чтобы вызов keys.push сработал?

*/

let map = new Map();

map.set("name", "John");

let keys = map.keys();

let arr = Array.from(map.keys())

arr.push("more");
alert(arr);

/*
Всё оказалось довольно легко:
Мы преобразовали коллекцию ключи коллекции Map в Массив, т.к. push - метод Массивов.
Именно КЛЮЧИ. Изначально  забыл, что такое возможно. К тому же забыл поставить скобки в Array.from(map.keys().
*/
