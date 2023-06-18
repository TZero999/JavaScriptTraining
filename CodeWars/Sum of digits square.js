let num = 3212;
console.log( squareDigits(num));

function squareDigits(num){
let arr = String(num).split('');
arr = arr.map ( value => Math.pow(value,2) );
return Number(arr.join(''));
}

/*

Простейшее решение:
function squareDigits(num){
  return +num.toString().split('').map(i => i*i).join('');
}

*/