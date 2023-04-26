/* Задание: Форматирование относительной даты. Важность: 4.

Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

*/

let date_1  = new Date();

let date_2 = new Date(2022, 9, 6, 15 , 49, 00);
formatDate(date_1, date_2);

function formatDate(d1, d2) {

    let diff = d1 - d2;

    if (diff <= 1000) {
        return alert ("Прямо сейчас")};

    if (diff <= 60000) {
        return alert (`${Math.round(diff/1000)} секунд(ы) назад `)};

    if (diff <= 3.6e6) {
        return alert (`${Math.round(diff/(60*1000))} минут(ы) назад`)};

    let year = d2.getFullYear().toString().slice(-2);
    let month = '0' + d2.getMonth().toString().slice(-2);
    let day = '0' + d2.getDate().toString().slice(-2);
    let fullDate = `${day}.${month}.${year} ${d2.getHours()}:${d2.getMinutes()}`;

    if (diff > 3.6e6) {
        return alert (fullDate)};
}

/*
1) Немного подсмотрел про то, как добавить нули к дате.
Правда не совсем специально. Впредь надо внимательнее читать задания.

2) Решение отличается от авторского, поэтому вот решение, которое предлагает автор:

function formatDate(date) {
  let diff = new Date() - date; // разница в миллисекундах

  if (diff < 1000) { // меньше 1 секунды
    return 'прямо сейчас';
  }

  let sec = Math.floor(diff / 1000); // преобразовать разницу в секунды

  if (sec < 60) {
    return sec + ' сек. назад';
  }

  let min = Math.floor(diff / 60000); // преобразовать разницу в минуты
  if (min < 60) {
    return min + ' мин. назад';
  }

  // отформатировать дату
  // добавить ведущие нули к единственной цифре дню/месяцу/часам/минутам
  let d = date;
  d = [
    '0' + d.getDate(),
    '0' + (d.getMonth() + 1),
    '' + d.getFullYear(),
    '0' + d.getHours(),
    '0' + d.getMinutes()
  ].map(component => component.slice(-2)); // взять последние 2 цифры из каждой компоненты

  // соединить компоненты в дату
  return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );
*/