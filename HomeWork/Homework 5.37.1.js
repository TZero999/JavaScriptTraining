/* Задача

Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
То есть дефисы удаляются, а все слова после них получают заглавную букву.

Примеры:
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.
*/

let str = prompt("Введите несколько слов через дефис","my-short-string");
camelize(str);



function camelize(str) {
str = str.split('-'); // Разбиваем строку на массив из подстрок
mod_str = str.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1));
str = str1.join('');

console.log(`Новая строка: ${str}`)
};


/*
modStr.forEach(element => {
    element.slice(-1);
    alert(element);
    })
};
*/