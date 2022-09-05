/*
Самостоятельная попытка потестировать объект calculator из ДЗ 4.28.2 (Тема: Методы объекта.)
*/

'use strict'
describe("Тестирование объекта calculator (Homework 4.28.2.js)", function() {

    it("Метод read получает и сохраняет 2 числа, как свойства объекта?:", function(){
        assert.equal(calculator.a, 4);
        assert.equal(calculator.b, 6);
    });

    it(`Метод sum возвращает a + b = ${calculator.a+calculator.b}:`, function() {
        assert.equal(calculator.a + calculator.b, calculator.sum());
    });

    it(`Метод mul возвращает a * b = ${calculator.a*calculator.b}:`, function() {
        assert.equal(calculator.a * calculator.b, calculator.mul());
    });
});
