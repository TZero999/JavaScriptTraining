console.log( repeatStr(6, "I"));
console.log( repeatStr(5, "Hello"));

function repeatStr (n, s) {
 let str='';
  let i=0;
 do {str+=s; i++} while(i != n);
  return str;
}

/*
Простейшее решение:
return s.repeat(n);
*/