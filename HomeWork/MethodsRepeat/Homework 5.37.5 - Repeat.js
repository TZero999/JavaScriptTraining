/* Задача: Скопировать и отсортировать массив. Важность: 5.

У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
Создайте функцию copySorted(arr), которая будет возвращать такую копию.

*/

let arr = [ "HTML", "JavaScript", "CSS", "V8", "ECMA" ];

let sorted = copySorted(arr);

alert("Отсортированный массив:" + sorted); // [ "CSS", "ECMA", "HTML", "JavaScript", "V8" ]
alert("Оригинальный массив:" + arr);

function copySorted(arr) {
    return arr.slice().sort((a, b) => a.localeCompare(b) ); 
}

// Автор предлагает вовсе использовать return arr.slice().sort(), но всё же с localeCompare понадёжнее будет.