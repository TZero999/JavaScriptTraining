var isSquare = function(n){
    return n === Math.pow(Math.sqrt(n), 2) && Number.isInteger( Math.sqrt(n) ) ? true : false;
}
  
let num = 54;
console.log( isSquare(num));

/*

Простейшее решение:
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

*/