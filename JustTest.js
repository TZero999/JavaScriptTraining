function pow(x, n) {
  x = prompt("Введите x: ", "");
  n = prompt("Введите n: ", "");
  
  if (n < 1) return alert("Так не работаем!");
  
  return x ** n;
  }
  alert(pow());