console.log(validateBet([5, 90], '1, 1, 3, 4, 5'));

function validateBet(game, text) {
    [n, m] = game;
    let arr = strSpliter(text);
    let result = [];

    console.log(`N = ${n}, M = ${m}. Array = [${arr}]`);

    // Проверка входной строки на количество символов.
    if (arr.length != n) return null;

    for (let digit of arr) {
        // Если в массиве есть цифры больше/меньше M - вернуть null.
        if (digit > m || digit < 1 || !Number(digit)) {
            result = null;
            break;
        } else {
            // Проверяем, что в массиве нет повторяющихся цифр
            if (result.includes(Number(digit))) {
                result = null;
                break;
            } else {
                // Если повторяющихся цифр нет - заполняем массив новой цифрой
                result.push(Number(digit));
            }
        }
    }

    // Если массив результата = null - вернём null. Иначе сортируем массив.
    result === null ? result : result.sort((a, b) => { return a - b });
    return result;
}

// Функция преобразования вводной строки в "красивый" массив
function strSpliter(text) {
    text = text.split(/[, ]/).filter(n => n);
    console.log(text);
    return text
}

/*
Простейшее решение задачи:

function validateBet(game, text){
  let [n, range] = game
  let arr = (text.match(/\d+/g) || []).map(x => +x)
  if(/[^\d ,]/.test(text) || arr.length != n || new Set(arr).size != n || arr.some(x => x > range || x < 1))
    return null
  return arr.sort((a, b) => a - b)
}
*/