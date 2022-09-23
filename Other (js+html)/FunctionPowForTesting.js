function pow(x, n) {
    // Добавили проверку на отрицательные и дробные степени.
if (n<0){
    return NaN;
}
if (Math.round(n) != n){
    return NaN;
}
  // Изначально тут было "return 8". Так мы сжульничали, так как первый тест будет вводить 2 в степени 3.
let result = 1;

for (let i = 0; i < n; i++) {
    result = x**n;
}

return result;
}