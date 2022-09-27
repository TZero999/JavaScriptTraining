/* Задача: Перемешайте массив. Важность: 3.

Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:

*/

let arr = [1, 2, 3];

for (i = 0; i < 11; i++){ 
shuffle(arr);
alert(arr);
}
alert ('\n');
shuffleTest(arr);

function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5); // Здесь были лишние a,b внутри sort.
}

function shuffleTest() {

    let count = {
    "123": 0,
    "321": 0,
    "132": 0,
    "312": 0,
    "213": 0,
    "231": 0,
};

for (let i = 0 ; i < 1001; i++ ) {
    shuffle(arr);
    count[arr.join('')]++;
};

for (let key in count) {
    alert (`${key} : ${count[key]}`);
};
}

/*
Возникли проблемы с попыткой самостоятельно проверить функцию.
*/