/* Задача: Установка и уменьшение значения счётчика. Важность: 5.

Измените код makeCounter() из главы 50 так, чтобы счётчик мог уменьшать и устанавливать значение.

Для этого реализуйте свойства:
1) counter - для возвращения текущего значения;
2) counter.increase() - должен увеличивать значение счётчика на 1-цу;
3) counter.decrease() - должен уменьшать значение счётчика на 1-цу;
4) counter.set(value) - должен устанавливать счётчику значение "value".

P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции.
Или сделать два варианта решения: и так, и так.
*/

function makeCounter() {

   let count = 0;
    
    function counter() {
    return count;
    };

    counter.increase = () => ++count;
    counter.decrease = () => --count;
    counter.set = value => (count = value);

    return counter;
}

let counter = makeCounter();
    counter.set(10);
    alert(counter()); // 10

    alert( counter.decrease() ); //9
    

    counter.increase();
alert( counter.increase()) ; //11
