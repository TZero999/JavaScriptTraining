/* Задача:
Создайте функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:
Хранить «текущее значение» в свойстве value.Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.

Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.
*/

function Accumulator(StartingValue){
    
    this.value = +StartingValue,

    this.read = function(){
        this.value = StartingValue+this.value;
        return this.value
    };
};

let x = +prompt("Введите число, которое будем аккумулировать:","0");
let n = +prompt("Введите число накоплений:","0");

let accumulator = new Accumulator(x); // начальное значение 1

for (i=0;i<n;i++) { 
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
};

console.log(`Начальное число: ${x}`);
console.log(`Количество аккумуляций: ${n}`);
alert(accumulator.value); // выведет сумму этих значений

/* Так выглядит мой первоначальный конечный вариант. Вообще, само задание расписано не слишком подробно,
не было ясно, каким именно образом должен работать этот аккумулятор. Так, в решении автора оказалось, что 
аккумулятор должен был прибавлять цифры, которые вводит сам пользователь, а не "накидывать" одну и ту же цифру n-ое
количество раз. НО стартовая величина, почему-то, фиксированная и равна единице.

Вот решение от автора: */

/*
function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('Сколько нужно добавить?', 0);
  };

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);
*/