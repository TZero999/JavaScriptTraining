let arr = [1, 2, 3];
console.log( maps(arr) );
// [2, 4, 6];

arr = [3, 8, 25, 50];
console.log( maps(arr) );
// [6, 16, 50, 100];

function maps(x){
    return x.map( values => values*2 )
}