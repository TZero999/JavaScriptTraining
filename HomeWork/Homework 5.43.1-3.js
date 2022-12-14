/* Задача 1: Создайте дату. Важность: 5.

Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
Для вывода используйте alert.
*/

let date1 = new Date(2012, 01, 20, 03, 12,);
alert (date1);

//----------------------------------------------------------------------------------------------------------------------------------------------

/* Задача 2: Покажите день недели. Важность 5.

Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
*/

getWeekDay(date1);

function getWeekDay(d) {
    day = d.getDay();
    switch (day) {
        case 0 : 
            alert("ВС - Это было воскресенье!");
            break;
        case 1:
            alert("ПН - Это был понедельник!");
            break;
        case 2:
            alert("ВТ - Это был вторник!");
            break;
        case 3:
            alert("СР - Это была среда!");
            break;
        case 4:
            alert("ЧТ - Это был четверг!");
            break;
        case 5:
            alert("ПТ -Это была пятница!");
            break;
        case 6:
            alert("СБ - Это была суббота!");
            break;
    }
}

/* Да, автор предложил идею короче и разумнее, до неё я не сразу бы додумался, если бы у меня забрали оператор Switch:

Создадим массив дней недели, чтобы получить имя нужного дня по его номеру:
let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
return days[date.getDay()];

Поэтому я переделал свою работу ещё раз: */

alert(`Это был `+ getDayOfWeek(date1));

function getDayOfWeek(d) {
    let days = ['ВС','ПН','ВТ','СР','ЧТ','ПТ','СБ',];
    return days[d.getDay()];
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------

/* Задача 3: День недели в европейской нумерации. Важность: 5.

В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7).
Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.
*/

alert(getLocalDay(date1));

function getLocalDay(d) {
    return d.getDay() === 0 ? 7 : d.getDay();
}

/*
Решение автора схоже:

function getLocalDay(date) {

    let day = date.getDay();

        if (day == 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7
        day = 7;
  }

  return day;
}
*/