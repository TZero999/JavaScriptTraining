/* Задача:
Напишите цикл, который предлагает prompt ввести число, большее 100.
Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
Предполагается, что посетитель вводит только числа. 
Предусматривать обработку нечисловых строк в этой задаче необязательно.
*/

// Первый код:

let Number = +prompt("Введите число большее, чем 100:","");

for (;Number<100 && Number != null;)
{
    alert("Пожалуйста, попробуйте ещё раз.");
    Number = +prompt("Введите число большее, чем 100:","");
}

if (Number == null)
{ 
    alert("Ошибка ввода. Процесс прекращён");
}
else
{
    alert ("Отлично, Вы молодец!")
};

/* 
Вновь я усложнил, можно было бы и проще всё сделать. Вот пример:

let num;
do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);

С другой стороны мой код сильно раздут из-за вывода алертов с ответами.
*/

/*
// Попытка сделать код с проверкой ввода. Пока провал.

let number = 0;

while (number<100 && number != null)
    {
        if(Number.isInteger (number))
        {
        number = +prompt("Введите число большее, чем число 100");
        }
    };

if (number == null || number =='')
    { 
    alert("Ошибка ввода. Процесс прекращён");
    }
else
    {
    alert ("Отлично, Вы молодец!")
    };
*/