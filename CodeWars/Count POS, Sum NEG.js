let input = [];

console.log(countPositivesSumNegatives(input));


function countPositivesSumNegatives(input) {
    let pos = 0;
    let sumNeg = 0;

    if (!input || input == '') return [];

    for (let digit of input) {
        (digit > 0) ? pos++ : (digit < 0) ? sumNeg += digit : sumNeg;
    }
    return [pos, sumNeg];
}