//Numbers

[...Array(5).keys()];
// => [0, 1, 2, 3, 4]

//Character iteration

String.fromCharCode(...[...Array('D'.charCodeAt(0) - 'A'.charCodeAt(0) + 1).keys()].map(i => i + 'A'.charCodeAt(0)));
// => "ABCD"

//Iteration

for (const x of Array(5).keys()) {
  console.log(x, String.fromCharCode('A'.charCodeAt(0) + x));
}
// => 0,"A" 1,"B" 2,"C" 3,"D" 4,"E"

//As functions

function range(size, startAt = 0) {
    return [...Array(size).keys()].map(i => i + startAt);
}

function characterRange(startChar, endChar) {
    return String.fromCharCode(...range(endChar.charCodeAt(0) -
            startChar.charCodeAt(0), startChar.charCodeAt(0)))
}

//As typed functions
/*
function range(size:number, startAt:number = 0):ReadonlyArray<number> {
    return [...Array(size).keys()].map(i => i + startAt);
}

function characterRange(startChar:string, endChar:string):ReadonlyArray<string> {
    return String.fromCharCode(...range(endChar.charCodeAt(0) -
            startChar.charCodeAt(0), startChar.charCodeAt(0)))
}
*/


//lodash.js _.range() function

/*
_.range(10);
 => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
_.range(1, 11);
 => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
_.range(0, 30, 5);
 => [0, 5, 10, 15, 20, 25]
_.range(0, -10, -1);
 => [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
String.fromCharCode(..._.range('A'.charCodeAt(0), 'D'.charCodeAt(0) + 1));
 => "ABCD"
*/

//Old non es6 browsers without a library:

Array.apply(null, Array(5)).map(function (_, i) {return i;});
// => [0, 1, 2, 3, 4]
