let input = 'Indivisibilities';
console.log(duplicateCount(input));


function duplicateCount(text) {
    text = text.toLowerCase();
    let textContainer = text.split('')
    let container = [];
    let count = 0;

    for (let char of textContainer) {
        if (!container.includes(char) && (text.split(char).length - 1) > 1) {
            count++;
            container.push(char);

            console.log(text.split(char));
            console.log(text.split(char).length - 1);
            console.log(container);
        }
    };

    return count;
}

/*
Решение пришлось подсмотреть - было сложно продумать логику помещения 
в массив встречающеёся несколько раз буквы/ цифры.
*/