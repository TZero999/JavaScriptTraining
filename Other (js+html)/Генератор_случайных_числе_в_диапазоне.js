// С дробной частью:
let min = +prompt("Введите минимум диапазона: ","");
let max = +prompt("Введите максимум диапазона: ","");
random(min, max);

function random(min, max){

let rand = min + Math.random() * (max-min);
return alert("Сгенерированное число: " + rand);
};


// Без дробной части:
random_integer(min, max);

function random_integer (min, max) {

// получаем случайное число от (min-0.5) до (max+0.5)
let rand_int = min -0.5 + Math.random() * (max-min +1);

return alert("Сгенерированное целое число:" + Math.round(rand_int));
}

/*
Изначальное моё решение для целого числа было таким:

let rand_int = min + Math.random() * (max-min -0.5);
return alert("Сгенерированное целое число: " + rand_int.toFixed(0));

Чтобы узнать, даёт ли оно адекватные результаты - надо использовать тестер случайных чисел.
*/