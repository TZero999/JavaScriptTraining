/* Задача:
Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:
checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
*/
'use strict';
let checkSpam = function(str) {
    let str_mod = str.toLowerCase();
    if (str_mod.includes("viagra") || str_mod.includes("ххх") || str_mod.includes("xxx")) {
    alert ("В вашем сообщении обнаружен спам.");
    } else {
    alert(`Ваше сообщение: ${str}`);
}};

let str = prompt("Введите сообщение: ","buy ViAgRA now");

do {
    alert ("Некорректный ввод.")
    str = prompt("Введите сообщение: ","buy ViAgRA now");
}
while (!str);

(checkSpam(str));

/*
Как всегда разнообразил условия.
Но столкнулся с проблемой. 

изначально в коде функции было следуюзее:
let checkSpam = function(str) {
    let str_mod = str.toLowerCase();
    if (str_mod.includes("viagra") || str_mod.includes("ххх") || str_mod.includes("xxx")) {
    alert ("В вашем сообщении обнаружен спам.");
    } else {
    return str;
}

Это приводило к тому, что после алерта "В вашем сообщении обнаружен спам." появлялся ещё один алерт "undefined".
Это было связано с инкапсуляцией alert-ов.
Лучше было сделать наше сообщение о спаме отдельной переменной и возвращать через return именно её, а не алерт. 
*/