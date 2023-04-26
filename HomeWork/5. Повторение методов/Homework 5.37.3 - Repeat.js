/* Задача: Фильтрация по диапазону "на месте". Важность: 4.

Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr
и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
мпи ссссФункция должна изменять принимаемый массив и ничего не возвращать.

*/

let arr = [5, 3, 8, 1, 2, 6, 4];

filterRangeInPlace (arr, 1, 4);

alert (arr);



function filterRangeInPlace(arr, a, b) {

    for (let i = 0 ; i < arr.length ; i++) {
        (a <= arr[i] && b >= arr[i]) ? arr[i] : arr.splice(i,1);
    }
}

// Не додумался сам до arr.splice(i,1).