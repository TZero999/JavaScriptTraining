/* Задача:
Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.
*/

/*Первый раз неправильно понял задачу. надо было создать ПУСТОЙ объект.

'use strict'

let user = {
    name: "John",
    surname: "Smith",
}

console.log ("Выводим информацию от объекте:", user);
user.name = "Pete"; // Не надо делать user[name] = Pete;
console.log (user.name); 
delete user.name; // Не надо делать delete user[name];
console.log (user);
*/

// Второй вариант, с пустым изначально объектом:
'use strict'

let user = {};

user.name = "John";
user.surname = "Smith";
console.log ("Выводим информацию от объекте:", user);

user.name = "Pete"; // Не надо делать user[name] = Pete;
console.log ("Меняем имя: ", user.name); // Выводит "Pete"

delete user.name; // Не надо делать delete user[name];
console.log ("Выводим информацию об объекте после удаления name: ", user); //Выводит объект со свойством только "surname".