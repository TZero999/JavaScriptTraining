/* Задание: Регулярное выражение для HTML-цветов

Описание: Напишите регулярное выражение, которое ищет HTML-цвета в формате #ABCDEF:
первым идёт символ #. Потом – 6 шестнадцатеричных символов.
*/

let regexp = /\#[0-9a-f]{6}\b/gi

let str = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678";

alert( str.match(regexp) )  // #121212,#AA00ef