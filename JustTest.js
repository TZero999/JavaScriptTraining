'use strict'

function ObjectClone(obj) {
  for (let key in obj) {
      clone[key] = obj[key];
  }
console.log ("Объект клонирован успешно.");
} 

let user ={
  name: 'John',
  age: 30,
}

let clone ={}

ObjectClone(user);

alert(user.name);
alert(user.age);
alert(clone.name);
alert(clone.age);