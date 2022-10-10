/*

*/

let our_num =[];
let res = 0;

// Проверяем длину вводимой строки
while (our_num.length != 12) {
our_num = prompt ("Введите первые 12 цифр CNP:","193120631875");
};

// Строка, на которую мы будем перемножать цифры нашего массива
let string = '279146358279';

// Разбиваем строки на отдельные символы. Каждый символ преобразуется в цифру и становится элементом массива. 
let arr1 = our_num.split('').map ( item => parseInt(item));
let arr2 = string.split('').map ( item => parseInt(item));

/*
// Участок кода для проверки получившихся массивов и их длины. 
console.log(arr1);
console.log(arr1.length);
console.log(arr2);
console.log(arr2.length);
*/

// Поэлементно перемножаем массивы друг на друга
for (let i = 0 ; i < arr1.length && i < arr2.length ; i++) {
res += arr1[i] * arr2[i];
// console.log (res); // Проверяем результирующую переменную
}

if (res%11 == 10 ) {
    alert ('13-ая цифра = 1')
} else { 
    alert ('13-ая цифра = ' + res%11)
}