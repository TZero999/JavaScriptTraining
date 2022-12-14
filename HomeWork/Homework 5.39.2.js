/* Задача: Отфильтруйте анаграммы. Важность: 4.

Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

Например:
nap - pan
ear - are - era
cheaters - hectares - teachers
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

*/

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"

function aclean(arr) {
let map = new Map(); 
    for (let word of arr) {
    sorted = word.toLowerCase().split('').sort().join('');
    map.set (sorted, word)
    }
return Array.from(map.values());
}

/*
Сложность кода в том, чтобы понять логику действий.
Это оказалось сложнее, чем написать код.
Не могу сказать, что адекватно справился с данной задачей.
*/  

//----------------------------------------------------------------------------------------------------------------

/* Вот логика работы кода:

1) Разбиваем каждое слово на буквы, отсортировываем их, объединяем получившийся массив.
2) Все Анаграммы становятся одинаковыми.
3) Используем эти отсортированные строки как ключи коллекции Map.
4) Каждому ключу будет сопоставлено только 1 значение.
5) Array.from(map.values()) принимает итерируемый объект значений объекта Map и возвращает их в виде массива.

*/