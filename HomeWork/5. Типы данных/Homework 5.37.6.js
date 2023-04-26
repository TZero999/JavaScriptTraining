/* Задача:

Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

Задание состоит из двух частей.

Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

Пример использования:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

Например, давайте добавим умножение *, деление / и возведение в степень **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8

Для этой задачи не нужны скобки или сложные выражения.
Числа и оператор разделены ровно одним пробелом.
Не лишним будет добавить обработку ошибок.

*/

let data = prompt('Введите два числа в формате "число оператор число": ',"");

let calc = new Calculator;

calc.addMethod('*', (a, b) => (a * b));
calc.addMethod('/', (a, b) => (a / b));
calc.addMethod('**', (a, b) => (a ** b));

alert(calc.calculate(data) ); // 10

function Calculator() {

this.method = {
    '+': (a, b) => (a + b),
    '-': (a, b) => (a - b),
};
    
this.calculate = function(data) {
    let elem = data.split(' ');
    a = +elem[0];
    operand = elem[1];
    b = +elem[2];

if (!this.method[operand] || isNaN(a) || isNaN(b)) {
    (alert ("Ошибка ввода. Калькулятор вернул Вам NaN"));
    }

return this.method[operand](a, b);
};

this.addMethod = function (opName, func) {
    this.method[opName] = func;
}
};

/*
Адский трындец. Нужно больше тренировок по работе с методами внутри функций.
Необходимо именно понимание логики данного процесса
*/