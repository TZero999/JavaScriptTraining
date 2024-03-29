// Задача: Найдите время

/* Описание:
Время имеет формат: HH:MM. 
Часы и минуты имеют две цифры, например, 09:00.

Введите регулярное выражение, чтобы найти время в строке: Завтрак в 09:00 в комнате 123:456.
P.S. В этой задаче пока нет необходимости проверять правильность времени, поэтому 25:99 также может быть верным результатом.
P.P.S. Регулярное выражение не должно находить 123:456.
*/

let regexp = /\b\d\d:\d\d\b/;
let str = 'Завтрак в 09:00 в комнате 123:456';

alert (str.match(regexp));

/*
P.S.:
Вышло довольно забавно. Я усложнил пример из урока, и вместо поиска 2-ух отдельно стоящих цифр
сразу искал в примере цифры, обозначающие время в формате HH:MM.
*/

