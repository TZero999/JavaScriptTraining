// Простая проверка на вводимые данные. 0 воспринимается как число, пустая строка - как не число.

let a = prompt('Введите a:','');

if (!Number.isFinite(+a) || a == '') {
    ///...
    alert("Не число");
} else {
    alert("Число");
};