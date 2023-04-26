/* Задача:
Написать автоматизированный тест, который проверит наш конструктор.
*/
'use strict'
describe("Тестирование объекта new Accumulator (Homework 4.29.2_var2.js)", function() {

    it("value получает начальное значение:", function(){
        let accumulator = new Accumulator(x);
        assert.equal(accumulator.value, x);
    });

    it("Последовательный ввод 1 и 0 даст нам 1:", function(){
        assert.equal(accumulator.value, x+(n*accumulator.value));
    });
});
/*
Пока вышло не очень. 
Надо изучать синтаксис самих фреймворков, чтобы иметь возможность писать более гибкие тесты.
Пока это больше похоже на присобачивание костылей...
*/