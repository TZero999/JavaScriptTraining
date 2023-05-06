/* Задача: Дестректурирующее присваивание. Важность: 5.

У нас есть объект user.
Напишите деструктурирующее присваивание, которое:

1) name присвоит в переменную name.
2) years присвоит в переменную age.
3) isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)

*/

let user = {
    name: "John",
    years: 30
};

/* let {name: name, years: age, isAdmin: isAdmin = false} = user; - мой вариант. Рабочий, но длинный */

let {name, year: age, isAdmin = false} = user; // Вариант автора.

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false