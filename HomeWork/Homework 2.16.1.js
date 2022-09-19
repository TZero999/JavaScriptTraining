/* Задача:

Замените код Function Expression стрелочной функцией:

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);
*/

let ask = (question, yes, no) => 
  {
    if (confirm(question)) yes()
    else no();
  }
  
ask(
    "Принимаете ли Вы пользовательское соглашение 165 пункт А?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
  );