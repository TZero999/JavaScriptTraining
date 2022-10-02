/* Задача: Сумма свойств объекта. Важность: 5.

Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
Если объект salaries пуст, то результат должен быть 0.

*/

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
alert( sumSalaries(salaries) ); // 650

function sumSalaries(arr){
return Object.values(arr).reduce(((sum, value) => sum + value),0);
}

/*

Делал через reduce, допустил 2 ошибки:
1) По аналогии с примером пытался сделать двойное преобразование Object.fromEntries(Object.entries(prices);
2) Зачем-то использовал Object.entries, а не Object.values.

*/
//---------------------------------------------------------------------------------------------------------------------------
/*

Автор предлагал ещё один вариант:

function sumSalaries(salaries) {

  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum; // 650
}

*/