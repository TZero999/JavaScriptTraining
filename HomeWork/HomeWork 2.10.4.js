let message, Login,id,name;



alert ("Подсказка: в компании работает всего 4 сотрудника.");
id = prompt ("Введите ваш идентификационный код:","");

if (id==1)
{name = "Анисимов Павел Петрович"}
else
if (id==2)
{name = "Паша"}
else
if (id==3)
{name = "Саша"}
else
if (id==4)
{name = "Игорь"}
else
{name = "нарушитель"}

(id == 1) ?
Login = 'Директор' : (id < 0) ?
Login = 'Нет логина' : (id < 5 ) ?
Login = 'Сотрудник': Login = 'Нет логина'; 

(Login == 'Сотрудник') ?
    message = `Привет, ${name}.` :
(Login == 'Директор') ?
    message = `Здравствуйте, ${name}.`:
(Login == 'Нет логина') ?
message = 'Не удалось идентифицировать Вас как сотрудника нашей компании. Доступ запрещён': message = "Error";

alert(message);
console.log ("Идентификационный номер: ", id);
console.log ("Должность: ", Login);
{console.log ("Посетитель сайта распознан как ",name)};
console.log ("Выводимое сообщение: ", message);