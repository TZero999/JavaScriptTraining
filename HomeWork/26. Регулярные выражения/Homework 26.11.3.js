/* Задание: Найти все числа

Напишите регулярное выражение, которое ищет любые десятичные числа,
включая целочисленные, с плавающей точкой и отрицательные.
*/ 

let regexp = /[\-]?\d+[\.]?[\d]*/g;

let str = "-1.5 0 2 -123.4. 256.528";

alert( str.match(regexp) ); // [''1.5', '0', '2', '-123.4', '256.528']

// Диапазоны здесь немного лишние, хотя визуально немного помогают.
// Без них регулярка будет выглядеть так: /\-?\d+\.?\d*/g;

/*
Кстати, и мой и авторский ( /-?\d+(\.\d+)?/g ) шаблон не сработает при наличие в строке 
чего-то наподобие '125.256.895.5'. Не число ведь? Нет. 
А регулярка сделает из этой строки 2 числа: ['125.256', '895.5']

Поэтому немного перепишем наш шаблон:
*/
str = "-1.5 0 2 -123.4 256.528 125.256.895.5";

regexp = 

alert(str.match(regexp));   // [-1.5, 0, 2, -123.4 256.528]


