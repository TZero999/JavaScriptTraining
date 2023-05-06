/* Задача: Независимы ли счётчики? Важность: 5.

Здесь мы делаем два счётчика: counter и counter2, используя одну и ту же функцию makeCounter.
Они независимы? Что покажет второй счётчик? 0,1 или 2,3 или что-то ещё?

*/

function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
}

let counter = makeCounter();
let counter2 = makeCounter();
//---------- Счётчик 1 -----------------
alert( counter() ); // 0
alert( counter() ); // 1
//---------- Счётчик 2 ----------------- 
alert( counter2() ); // 0 или 2? 
alert( counter2() ); // 1 или 3?

/* Тут всё просто. Функции counter1 и counter2 созданы разными вызовами makeCounter().
Каждый новый вызов - новое лексическое окружение со своим собственным count-ом.
*/