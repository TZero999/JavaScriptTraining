/* Задача: Трансформировать в объекты. Важность: 5.

У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

*/

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = transObj(users);

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullname ) // Вася Пупкин

function transObj(arr) {
return arr = arr.map (item => ({
    fullname: item.name + " " + item.surname,  
    id: item.id 
    }))      
}

/* Опять пришлось подсматривать - проблему вызвал синтаксис кавычек. */