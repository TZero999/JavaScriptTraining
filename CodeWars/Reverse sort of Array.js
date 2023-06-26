let num = 42145;

console.log(descendingOrder(num));

function descendingOrder(n) {
    let sort_arr = String(n).split('').sort();
    let reverse_string = sort_arr.reverse().join('')
    return Number(reverse_string);
}