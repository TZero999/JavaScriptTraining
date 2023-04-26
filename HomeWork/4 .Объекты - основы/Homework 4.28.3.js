/* Задача:
У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
  }
};

Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0

*/

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert(`Текущая ступенька: ${this.step}`);
      return this;
    },
    // Функция для отслеживания потери значения this:
    check(){
    console.log(`Текущее значение this: ${this}`);
    return this;
    }
  };

ladder
  .up()
  .check()
  .up()
  .check()
  .down()
  .check()
  .showStep() // 1
  .check()
  .down()
  .check()
  .showStep() // 0
  .check();

  /* Почему всё заработало, когда после каждой функции мы добавили return this?
Ситуация, как и с задачей №1 этой же темы.
Значением this в таких ситуациях СТАНОВИТСЯ ОБЪЕКТ ПЕРЕД ТОЧКОЙ.

Если же мы не используем "return this" наше значение this внутри цепочки станет равно undefined,
т.к. оно вызывается как функция, а не через точечный синтаксис.
Это можно проверить вот так:
*/