let result;
let a = prompt("Введите a:","");
let b = prompt("Введите b:","");

(+a + +b < 4) ? result = 'Мало' : result = 'Много'; // Изначально забыл про приведение типов. a и b в результате оператора prompt принимают тип String.

alert(result);
console.log("Изначально забыл про приведение типов. a и b в результате оператора prompt принимают тип String.");