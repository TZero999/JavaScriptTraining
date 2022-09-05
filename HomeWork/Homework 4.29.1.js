/* Задача:
Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств.
*/

function Calculator() {
    this.read = function(){
    this.a = +prompt ("Первое число:","0");
    this.b = +prompt ("Второе число","0");
    };

    this.sum = function(){
        return (this.a + this.b);
    };

    this.mul = function(){
        return (this.a * this.b);
    };
};

let calculator = new Calculator();
calculator.read();
alert( `Сумма: ${calculator.sum()}`);
alert( `Произведение: ${calculator.mul()}`);

/* Здесь нам пришлось переписать наши методы под отдельные функции
и в название каждой функции добавить this.
*/