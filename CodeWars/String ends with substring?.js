let str = 'abcde';
let ending = 'cde';

function solution(str, ending) {
    return str.endsWith(ending);
}

/*

Неудачная попытка решения:

function solution(str, ending) {
    let regexp = new RegExp(`\s*${ending}$`, 'i');

    console.log(str, ending);
    return regexp.test(str);
}

 Добавляем функцию, проверяющую строку "ending" на наличие символов,
которые необходимо экранировать перед обработкой.

Не работает, если несколкьо символов идут подряд, надо было дорабатывать.

function shieldCheck(ending) {
    let mustShielding = ['[', ']', '\\', "^", "'", "$", '.', '|', '?', '*', '+', '(', ')'];
    let substring = '\\';

    if (mustShielding.includes(ending)) {
        console.log('Gotcha!');
        return ending = substring + ending;
    };

    return ending;
}
*/