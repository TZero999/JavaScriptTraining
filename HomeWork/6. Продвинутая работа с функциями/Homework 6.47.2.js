/* Задача: Объект счётчика. Важность: 5.

Здесь объект счётчика создан с помощью функции-конструктора.
Будет ли он работать? Что покажет?

*/

function Counter() {
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
    
    this.down = function() {
      return --count;
    };
}

let counter = new Counter();
alert( counter.up() );   // ?
alert( counter.up() );   // ?
alert( counter.down() ); // ?

/* Функция будет работать как положено.
Вложенные функции работают с одним и тем же лексическим окружением => имеют доступ к одной и той же переменной.
Получим: 1, 2, 1.
*/ 