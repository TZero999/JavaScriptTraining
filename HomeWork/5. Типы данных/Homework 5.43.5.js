/* Задача: Последнее число месяца. Важность: 5.

Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

Параметры:
year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
*/

let year = (+prompt("Введите интересующий год","2012"));
let month = (+prompt("Введите номер интересующего Вас месяца","1"));
getLastDayOfMonth(year, month);

function getLastDayOfMonth(y, m) {
    let date = new Date (y, m, 0);

    return alert(`Количество дней в интересующем Вас месяце: ${date.getDate()}`);
}