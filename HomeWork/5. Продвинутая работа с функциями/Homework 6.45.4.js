/* Задача: Вывод односвязного списка. Важность: 5

Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек).

Напишите функцию printList(list), которая выводит элементы списка по одному.

Сделайте два варианта решения: используя цикл и через рекурсию.
Как лучше: с рекурсией или без?

*/

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};

printList(list);

function printList(list) {
    let tmp = list;
    let arr = [];

    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }

    for (let i = arr.length - 1 ; i >= 0; i--) {
    console.log( arr[i]) };
}

printListRecursion(list);

function printListRecursion(list) {
tmp = list;

if (list.next != null) {
    printListRecursion(list.next)
}

console.log (list.value);
}