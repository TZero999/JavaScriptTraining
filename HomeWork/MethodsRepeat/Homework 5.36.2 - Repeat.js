/* Задача: Операции с массивами. Важность: 5.

Давайте произведём 5 операций с массивом.

Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте Рэп и Регги в начало массива.

*/

let styles = [
    " Джаз",
    " Блюз",
    " RnB",
    " Рок",
];

styles.push(" Рок-н-ролл"); // + Рок-н-ролл в конец

styles[Math.floor((styles.length/2))] = " Классика"; // + Классика в середину

styles.shift(); // - Джаз в начале

styles.unshift(" Рэп", " Регги"); // + Рэп и Регги в начало

alert(styles);