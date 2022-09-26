/* Задача: Создать расширяемый калькулятор. Важность: 5.

Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

Задание состоит из двух частей.
1) Реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат.
Метод должен понимать плюс + и минус -.

2) добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции.
Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

Например, давайте добавим умножение *, деление / и возведение в степень **.

Задача, которая в прошлый раз вызвала у меня кучу проблем...
*/

let str = prompt("Введите математическое выражение вида 'a operator b': ","");
let calc = new Calculator(str);

// Новые операции из примера:
calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);

// Проверка добавлением собственной операции:
calc.addMethod("^", (a,b) => a ** b);

// Выведение результата:
alert (calc.calculate(str));

// Тело функции-конструктора:
function Calculator() {

    // Метод доступных операций:
    this.methods = {
        '+' : (a, b) => a + b,
        '-' : (a, b) => a - b,
    };

    // Метод вычисляющий результат:
    this.calculate = function(str) {
        arr =  str.split (' ');
        let a = +arr[0], b = +arr[2], operand = arr[1];
    
        // Проверяем ввод и при наличии ошибок возвращаем алерт:
        if ( !isFinite(a) || !isFinite(b) || !this.methods[operand]) {
        return alert("Ошибка ввода") };
    
    return this.methods [operand] (a,b);
    };

    // Метод для добавления операций:
    this.addMethod = function (name, func){
        this.methods[name] = func;
    };
}

/*
В этот раз было чуть проще, но всё равно это задание выглядит крайне запарно. 
Самая большая проблема была при обращении одного метода к другому.
*/