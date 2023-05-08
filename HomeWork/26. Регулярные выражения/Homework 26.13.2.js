/* Задание: Найдите пары BB-кодов

BB-код имеет вид [tag]...[/tag], где tag– это один из: b, url или quote.
[b]текст[/b]
[url]http://ya.ru[/url]

Теги могут быть вложенными:
[url] [b]http://ya.ru[/b] [/url]
[quote] [b]текст[/b] [/quote]

Теги могут переноситься на другие строки:
[quote]
  [b]текст[/b]
[/quote]

Создайте регулярное выражение для поиска всех BB-кодов и их содержимого.
*/

let regexp1 = /(\[.+\])/gi;
let regexp2 = /(\[(b|url|quote)\]).*?(\[\/(b|url|quote)\])/gis;
let regexp3 = /(\[(b|url|quote)\]).*?\[\/\2]/gis;

let str = "..[url]http://ya.ru[/url]..";
let str2 = "..[url][b]http://ya.ru[/b][/url]..";

alert( str.match(regexp1) ); // [url]http://ya.ru[/url]
alert( str2.match(regexp1) ); // [url][b]http://ya.ru[/b][/url]
  alert('\n');
alert( str.match(regexp2) ); // [url]http://ya.ru[/url]
alert( str2.match(regexp2) ); // [url][b]http://ya.ru[/b][/url]
  alert('\n');
alert( str.match(regexp3) ); // [url]http://ya.ru[/url]
alert( str2.match(regexp3) ); // [url][b]http://ya.ru[/b][/url]

/* 
Вариантов так много потому что сначала я искал все теги,
потом понял, что BB-теги это только теги b, url или quote.

А третий вариант родился благодаря автору - обратные ссылки я сам использовать не додумался.
*/