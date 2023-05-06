/* Задача: Максимальная зарплата. Важность: 5.

У нас есть объект salaries с зарплатами.

Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

Если объект salaries пустой, то нужно вернуть null.

Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.

P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
*/

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
topSalary(salaries);
loserSalary(salaries);

function topSalary(arr) {

let max = 0;
let topName = null;

for ( let [name, salary] of Object.entries(arr)) {
        if (max < salary) { max = salary; topName = name };
}

return alert(`Top manager: ${topName}, Salary: ${max}`);
}

function loserSalary(arr) {
    
let min = Number.MAX_SAFE_INTEGER;
let loserName = null;
  
for (let [name, salary] of Object.entries(arr)) {
        if (min > salary) { min = salary; loserName = name }; 
}

return alert(`Loser: ${loserName}, Salary: ${min}`) 
}

/*
Решил сделать ещё и минимальную ЗП, чтобы лучше разобраться.

Пытался усложнить задачу через reduce, но не вышло из-за того,
что правильно записать максимальное целое число в JS не
Number.MAX_SAFE_VALUE, а Number.MAX_SAFE_INTEGER.

Из-за этого так и не смог запустить код с reduce, а когда понял причину - было поздно.

*/