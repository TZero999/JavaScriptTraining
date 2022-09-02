/* Задача:

Проверка на пустоту.
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
Должно работать так:

let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false

*/

'use strict';

function IsEmpty(obj){
    for (let key in obj)
    {    /* 
    Раньше у меня было так, но есть хитрость:
if (key === undefined);
return true 
    такой цикл не начнёт выполняться, если свойств у объекта нет! 
    */
    return false;
    }
return true;    
}

let Alarm = {};
alert(IsEmpty(Alarm) ); // true
console.log("Объект до добавления свойств пуст? ",IsEmpty(Alarm));

Alarm["8:30"] = "get up";
alert(IsEmpty(Alarm) ); // false
console.log("Объект после добавления свойств пуст? ",IsEmpty(Alarm));
