/* Задача:
Функция makeUser возвращает объект.
Каким будет результат при обращении к свойству объекта ref? Почему? */

function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  
  alert( user.ref.name );

  /* Функция выдаст ошибку, т.к. правилам, определяющим значение this, важен лишь момент вызова функции.
  Значение this внутри makeUser будет undefined, т.к. оно вызывается как функция, а не через
  "точечный" синтаксис.

  Единственный способ заставить этот код работать - сделать user.ref методом. Тогда this станет объектом перед точкой.
  Вот так:

  function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
}

let user = makeUser();

alert( user.ref().name ); // John*/