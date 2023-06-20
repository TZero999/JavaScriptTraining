var countSheep = function (num){
    let str = '';
    
    for (i = 1; i <= num ; i++){
    str = str + `${i} sheep...`;
    }
    
    return str;
  }
  
  let num = 1;
  console.log( countSheep(num) );