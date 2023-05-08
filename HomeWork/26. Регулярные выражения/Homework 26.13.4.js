/*
Задание: Найдите весь тег

Напишите регулярное выражение, которое ищет тег <style...>. Оно должно искать весь тег: он может
как не иметь атрибутов <style>, так и иметь несколько <style type="..." id="...">.

…Но регулярное выражение не должно находить тег <styler> и т.п.!
*/

let regexp = /<style(>|\b.*?>)/g;
let str = '<style> <styler> <style id="usefull" test="yes"><\body>';

alert( str.match(regexp) ); // [ <style>, <style id="usefull" test="yes"> ];