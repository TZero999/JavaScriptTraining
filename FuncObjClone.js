/* Функция клонирования объектов. 
Перед запуском функции ОБЯЗАТЕЛЬНО создать пустой объект clone.
Эта функция - простая тренировка. В реальных условия куда проще использовать
встроенный метод Object.assign:
let clone = Object.assign({}, user); */

function ObjectClone(obj) {
  for (let key in obj) {
      clone[key] = obj[key];
  }
console.log ("Объект клонирован успешно.");
} 