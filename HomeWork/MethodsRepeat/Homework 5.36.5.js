/* Задача: Подмасив наибольшей суммы. Важность: 2.

На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
Необходимо найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
Функция getMaxSubSum(arr) должна возвращать эту сумму.

*/

let arr = [];
arrInput(arr);
console.log (arr);
alert ("Максимальная сумма в непрерывном подмассиве: " + getMaxSubSum(arr));


// Функция наполнения массива из прошлой задачи
function arrInput(arr) {
    
    for (let i = 0 ; ; i++) {
    let elem = prompt("Введите число - следующий элемент массива: ");
     
    if (!Number.isFinite(+elem) || elem === '' || elem === null) {
        return arr;
    }

    arr[i] = +elem;
}
};


// Функция нахождения максимальной суммы
function getMaxSubSum(arr) {

    let maxSum = 0;
    let curSum = 0;

    for (let elem of arr) {
        curSum += +elem;
        maxSum = Math.max (maxSum, curSum);
        
        if (curSum <0) curSum = 0;
    }
return maxSum;
};

/* Пришлось подсмотреть решенеи автора, так как я не особо понимал, что имеется ввиду под
"Непрерывный" подмассивом. Всё оказалось куда проще, чем казалось.
В наказание ввёл в задачу дополнительное требование ввода массива вручную, по аналогии
с предыдущим заданием.
*/