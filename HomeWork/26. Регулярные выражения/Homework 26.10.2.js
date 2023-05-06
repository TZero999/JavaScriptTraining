/* Задание: Поиск HTML-комментариев

Найти все HTML-комментарии в тексте:
*/

let regexp = /<!--.*-->/gs;
let str = `... <!-- My -- comment
 test --> ..  <!----> ..
`;

alert( str.match(regexp) ); // '<!-- My -- comment \n test -->', '<!---->'