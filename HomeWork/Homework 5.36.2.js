/* Задача:

Давайте произведём 5 операций с массивом.

1) Создайте массив styles с элементами «Джаз» и «Блюз».
2) Добавьте «Рок-н-ролл» в конец.
3) Замените значение в середине на «Классика». 
ВАШ КОД ДЛЯ ПОИСКА ЗНАЧЕНИЯ В СЕРЕДИНЕ ДОЛЖЕН РАБОТАТЬ ДЛЯ МАССИВОВ С ЛЮБОЙ ДЛИНОЙ.
4) Удалите первый элемент массива и покажите его.
5) Вставьте Рэп и Регги в начало массива.

Массив по ходу выполнения операций:
Джаз, Блюз
Джаз, Блюз, Рок-н-ролл
Джаз, Классика, Рок-н-ролл
Классика, Рок-н-ролл
Рэп, Регги, Классика, Рок-н-ролл
*/

let Music_styles = ["Джаз", "Блюз"];

Music_styles.push ("Рок-н-ролл");
Music_styles[Math.floor((Music_styles.length - 1) / 2)] = "Классика"
Music_styles.shift(0);
Music_styles.unshift ("Рэп", "Регги");

/* Решение автора:

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика"; // - вот тут нечто просто...
alert( styles.shift() );
styles.unshift("Рэп", "Регги");


Принцип вроде бы ясен, но чего я не понял - так это зачем здесь Math.floor
Music_styles[(Music_styles.length - 1) / 2] = "Классика"; // [ 'Джаз', 'Классика', 'Рок-н-ролл' ]
Music_styles[Math.floor((Music_styles.length - 1) / 2)] = "Классика"; //  [ 'Джаз', 'Классика', 'Рок-н-ролл' ]

Всё понял, это нужно для того, чтобы можно было заменить центральное значение любого массива, произвольной длины.
А округление, скорее всего, необходимо, чтобы код работал как для массивов с чётным, так и с нечётным количеством элементов. 
*/