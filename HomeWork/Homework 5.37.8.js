/* Задача: Трансформировать в объекты, важность: 5

У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

Например:

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = ... ваш код ... 

//---------------------------------------------------------------
То, что будет в нашем массиве usersMaped:

usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
//---------------------------------------------------------------

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин
Итак, на самом деле вам нужно трансформировать один массив объектов в другой. Попробуйте использовать =>. Это небольшая уловка.
*/

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map (item => ({fullName: `${item.name}  ${item.surname}`, id: `${item.id}`}));

let info = +prompt("Введите id пользователя, которым Вы интересуетесь. От 1 до 3","" );
alert( usersMapped[info-1].fullName ) // Вася Пупкин

/*
С первого раза эту задачу я не понял.
Надо попробовать переделать на новом примере и запомнить, что функция
способна просто создать новый объект, со всеми необходимыми нам данными.
*/

/* Закрепил знания выполнив самостоятельное задание Userwork 5.37.1.js: */ src = "./HomeWork/Homework 5.37.X.js"

/* Решение автора:

Код:
    let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
    let petya = { name: "Петя", surname: "Иванов", id: 2 };
    let masha = { name: "Маша", surname: "Петрова", id: 3 };

    let users = [ vasya, petya, masha ];

    let usersMapped = users.map(user => ({
        fullName: `${user.name} ${user.surname}`,
        id: user.id
    }));


    alert( usersMapped[0].id ); // 1
    alert( usersMapped[0].fullName ); // Вася Пупкин

Конец кода.

Обратите внимание, что для стрелочных функций мы должны использовать дополнительные скобки.

Мы не можем написать вот так:

let usersMapped = users.map(user => {
  fullName: `${user.name} ${user.surname}`,
  id: user.id
});
Как мы помним, есть две функции со стрелками: без тела value => expr и с телом value => {...}.

Здесь JavaScript будет трактовать { как начало тела функции, а не начало объекта. Чтобы обойти это, нужно заключить их в «нормальные» скобки:

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));
Теперь всё хорошо.
 
*/