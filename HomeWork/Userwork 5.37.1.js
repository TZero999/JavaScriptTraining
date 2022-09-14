// Задача для закрепления изученного в 5.37.8.js:

let frs_stud = {name: 'Андрей', surname: 'Фёдоров', place: '1A', progress: 'Хор'};
let scd_stud = {name: 'Ян', surname: 'Пашкевич', place: '2A', progress: 'Уд'};
let thr_stud = {name: 'Полина', surname: 'Пришвина', place: '1B', progress: 'Отл'};
let frt_stud = {name: 'Артём', surname: 'Ропёнов', place: '2B', progress: 'Хор'};

let classroom = [ frs_stud, scd_stud, thr_stud, frt_stud ];

let vacancies = [ 'B4', 'C1' , 'C4', 'E2', 'E8'];

let new_classroom = classroom.map (stud => ({
    Fullname: `${stud.name} ${stud.surname}`,
    Newplace : `${stud.place}`,
})

);

let info = +prompt("Введите id пользователя, которым Вы интересуетесь. От 1 до 3","" );
console.log("Полное имя ученика: " + new_classroom[info-1].Fullname);
console.log("Новое место - " + new_classroom[info-1].Newplace); // Потом можно будет реализовать случайный выбор места из списка свободных мест.