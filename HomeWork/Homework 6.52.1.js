/* Задача: Вывод каждую секунду. Важность 5.

Напишите функцию printNumbers (from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
Сделать 2 варианта решения:
1) Через setInterval;
2) Через вложенный setTimeout
*/

from = prompt('Введите число "От"','1');
to = prompt('Введите число "До"','5');
let method = prompt("Выберите режим: 1 - для setInterval, 2 - для рекурсивного setTimeout",'1');

(method == 1) ? printNumbers() : (method == 2) ? printNumbers2() : alert ('Метод выбран некорректно') ;

// Через setInterval:
function printNumbers (){
    let current = from;
    
    let timerId = setInterval( () => {
        alert(current);
        current == to ? clearInterval(timerId) : current ++ ;
    },1000);
};

// Через вложенный setTimeout:
function printNumbers2 (){
    let current = from;

    let timerId = setTimeout( function func(){
        alert(current);

        (current < to) ? setTimeout(func, 1000) : clearTimeout(timerId);
        current ++;
    }, 1000);
};