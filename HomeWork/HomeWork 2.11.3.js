let Login, Password;

Login = prompt ("Введите логин","");

if (Login=="Админ")
{
    Password = prompt ("Введите пароль","");

    if (Password == "Я Главный")
    {
        alert (`Здравствуйте, ${Login}`)
    }
        else if (Password=='' || Password == null)
        {
            alert ("Отменено");
        }
            else
            {
             alert ("Неверный пароль");   
            }
}
    else if (Login=='' || Login == null)
    {
        alert ("Отменено");
    }
        else
        {
            alert ("Я вас не знаю")
        };
        
console.log(Login)
console.log(Password)