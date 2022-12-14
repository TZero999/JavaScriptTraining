/* Задача:

let arr = ["a", "b"];
arr.push(function() {
  alert( this );
});
arr[2](); // ?
*/

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // a,b,function(){...}

/* Задача вновь теоретическая, но интересная...

Вызов arr[2]() - это то же самое, что вызов obj[method]().
Получается, что arr[2]() - вызывает функцию, которая в качестве объекта получает весь объект (т.к. есть this).

Если говорить иначе - мы добавляем функцию/метод в конец массива, а затем вызываем его и получаем весь массив,
в котором уже добавлена функция в качестве третьего элемента. 
*/
