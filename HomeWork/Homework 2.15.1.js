/* Задача:
Следующая функция возвращает true, если параметр age больше 18.
В ином случае она задаёт вопрос confirm и возвращает его результат.

Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
Сделайте два варианта функции checkAge:

1) Используя оператор ?
2) Используя оператор ||

Изначальный код:

function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return confirm('Родители разрешили?');
    }
  }

let age = +prompt('Сколько вам лет?','');
if (checkAge(age))
{
    alert( 'Доступ получен' );
}
else
{
alert( 'Доступ закрыт' );
};

*/

// 1 Вариант
function checkAge1(age) 
{
return (age >= 18) ? true : confirm('Родители разрешили?');
}

let age = +prompt('Сколько вам лет?','');
if (checkAge1(age))
{
    alert( 'Доступ получен' );
}
else
{
alert( 'Доступ закрыт' );
};

//2 Вариант
function checkAge2(age) 
{
return (age >= 18) || confirm('Родители разрешили?');
}

if (checkAge2(age))
{
    alert( 'Доступ получен' );
}
else
{
alert( 'Доступ закрыт' );
};