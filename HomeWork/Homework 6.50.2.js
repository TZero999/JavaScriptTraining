/* Задача: Сумма с произвольным количеством скобок. Важность: 2.

Напишите функцию sum(), которая бы работала следующим образом:
sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15
*/

function sum(x) {

    let currentSum = x;
  
    function f(y) {
      currentSum += y;
      return f;
    };
  
    f.toString = function() {
      return currentSum;
    };
  return f
  };
  
  alert( sum(1)(2) );

/*

Стоит обратить внимание на то, что функция sum выполняется лишь однажды и просто возвращает функцию f.

Далее, при каждом последующем вызове, f суммирует свой аргумент со значением currentSum и возвращает себя же.

В ПОСЛЕДНЕЙ СТРОКЕ НЕ РЕКУРСИЯ!
Рекурсия выглядит так: return f();
У нас просто возвращение функции, без её вызова: return f;

Функция f будет использоваться в последующем вызове и снова возвращать себя столько раз, сколько будет необходимо.
Затем, при использовании в качестве числа или строки, метод toString возвращает currentSum – число.

Также здесь мы можем использовать Symbol.toPrimitive или valueOf для преобразования.
*/