let arrayOfSheep = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ,
    'wolf', null, null, undefined];

console.log (countSheeps(arrayOfSheep));

function countSheeps(array) {
let sum = 0;
for (elem of array) {
if (elem === true) sum++;
}
return sum;
}

/*
Простейшее решение
(НО только при условии, что массив имеет только true, false, nukk, undefined!):

function countSheeps(arrayOfSheeps) {
return arrayOfSheeps.filter(Boolean).length;
}
*/