/* Задача:

Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

*/

function sumInput(){

let arr = [];
let sum = 0;

for (let i = 0 ; ; i++) {
    arr[i] = prompt("Введите число:","");

        if (arr[i] === null || arr[i] === '' || !isFinite(arr[i])) break;

    sum += +arr[i];
    console.log(arr + ` sum: ${sum}`);
    };
return sum;
}

alert (`Сумма введённых чисел: ${sumInput()}`);

// P.S.: Таки пришлось подсмотреть решение, т.к. забыл о трюке с !isFinite().
// P.P.S.: Зато код у меня получился покороче, чем у автора.

/* Решение автора:

function sumInput() {

  let numbers = [];

  while (true) {

    let value = prompt("Введите число", 0);

    // Прекращаем ввод?
    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

alert( sumInput() );
*/