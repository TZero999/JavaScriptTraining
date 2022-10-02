/* Задача: Фильтрация уникальных элементов массива. Важность: 5.

Допустим, у нас есть массив arr.
Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

*/

let values = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];
 
alert( unique(values) ); // [ 'Hare', 'Krishna', ':-O' ]

function unique(arr) {
    arr = new Set(arr);
    return Array.from(arr);
};


/* Автор сделал хитрее и произвёл 2 действия за 1 команду:

function unique(arr) {
return Array.from(new Set(arr));
}

*/