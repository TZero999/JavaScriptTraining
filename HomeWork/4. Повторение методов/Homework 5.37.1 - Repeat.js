/* Задача: Перевод текста вида border-left-width в BorderLeftWidth. Важность: 5.

Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
То есть дефисы удаляются, а все слова после них получают заглавную букву.

*/

let str = prompt("Введите строку, где слова будут разделены дефисами и начинаться со строчной буквы: ","background-color");
alert (camelize(str));

function camelize(str) {

arr = str.split('-');
arr = arr.map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1));
return arr.join('');
}

/*
Вновь проблема состояла в том, чтобы придумать, как увеличить первые буквы начиная со второго слова.
*/