/* Задача:

Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.
*/

let calculator = {
    read(){
        this.a = +prompt("Введите первое число: ","");
        this.b = +prompt("Введите второе число: ","");
    },
    sum(){
        let Sum = this.a + this.b;
        //Консоль логи для проверки правильности действий.
        /*
        console.log(`a = ${this.a};`);
        console.log(`b = ${this.b};`);
        console.log(`Summary = ${Sum};`);
        */
        return Sum;
    },
    mul(){
        let Mult = this.a * this.b;
    //  console.log(`Multiplex = ${Mult};`);
        return Mult;

    },
};
  calculator.read();
  alert( `Сумма: ${calculator.sum()}`);
  alert( `Производное: ${calculator.mul()}`);