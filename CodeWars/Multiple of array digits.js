let x = [];

console.log(x);
console.log (grow(x));

function grow(x){return x.reduce((a,b)=>a*b)};


/*

Попытка создать самонаполняемый массив.

x.length = getRandomInt(10);

for (let space of x){
    x.push(getRandomInt(100));
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

*/