let hours = 1;
let minutes = 58;
let seconds = 25;

console.log( past(hours, minutes, seconds) );

function past(h, m, s){
    return h*3600000 + m*60000 + s*1000;
}

/* 
Другой способ решения:
function past(h, m, s){
  return ((h*3600)+(m*60)+s)*1000;
}
*/

/*
    1h = 3600000 ms
    1m = 60000 ms
    1s = 1000 ms
*/