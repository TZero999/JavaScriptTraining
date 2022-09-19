'use strict'

let user ={
  name: 'John',
  age: 30,
}

let clone ={};

ObjectClone(user);

console.log ("Оригинальный объект user: ", user);
console.log ("Клонированный объект clone: ", clone);

// Делаем то же самое ещё раз через Object.assign:

let clone2 = {};
Object.assign(clone2, user);
console.log ("Объект clone2, клонированнный методом Object.assign: ", clone2);

//Сама функция клонирования:

function ObjectClone(obj) {
    for (let key in obj) {
        clone[key] = obj[key];
    }
  console.log ("Объект клонирован успешно.");
}