/* Задача: Декоратор-шпион. Важность: 5.

Создаёте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.
Каждый вызов должен сохраняться как массив аргументов.

*/

function work(a, b) {
    alert( a + b ); // произвольная функция или метод
  }
  
work = spy(work);
  
  work(1, 2); // 3
  work(4, 5); // 9

for (let args of work.calls) {
    alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}

// Обёртка:
function spy(func) {
    function wrap(...args) {
    
        wrap.calls.push(args);
        return func(...args);
    }
wrap.calls =[];

return wrap;
}