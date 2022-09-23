/* Задача: Проверка на спам. Важность 5.

Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
Функция должна быть нечувствительна к регистру:

*/

let str = prompt ('Введите предложение с "запрещёнными" словами: ','Free Porno and Drugs!');
checkSpam(str);

function checkSpam(str){

let filter = [
    'porn',
    'drugs',
    'drugz',
    'sex',
    'dick',
    'asshole',
    'xxx',
    'fuck',
    'boobs',
    'tits',
    'viagra',
];

str_mod = str.toLowerCase();

for (let i = 0; i < filter.length; i++) {
    if (str_mod.includes(filter[i])) {
    return alert ("В сообщении обнаружены запрещённые слова/выражения.");
}}
    return alert(`Со строкой "${str}" всё в порядке.`);
};

/*
Чуть усложнил задачу, благодаря знаниям о массивах.
Всё же вряд ли какой-то сумасшедший будет заводить переменную под каждое слово или
проверять строку через 'includes(x) || includes (y) || includes (z)'

Хотя ясно, что автор делал это из-за отсутствия знаний о массивах у обучающихся.
*/