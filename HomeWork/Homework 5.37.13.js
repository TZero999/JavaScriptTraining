/* Задача: Создайте объект с ключами из массива. Важность: 4.

Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.
Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.
Такая функция очень удобна при работе с данными, которые приходят с сервера.
В этой задаче мы предполагаем, что id уникален. Не может быть двух элементов массива с одинаковым id.
Используйте метод .reduce в решении.

*/

/*
// после вызова у нас должно получиться:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
let usersById = groupById(users);
alert (usersById);

function groupById (arr) {
    return arr.reduce( (object, value) => {object[value.id] = value; return object;},{})
} 

/* Проблемная задача... */