const childProcess = require('child_process');

let url     =  'ya.ru'//prompt("Укажите сайт, который будем проверять","ya.ru");
let packCnt = 4//+prompt("Сколько пакетов хотите отправлять за 1 сессию?","4");
let time    = 10//+prompt("С какой преиодичностью повторять проверку (сек.)?","10");

ping(url, packCnt);


function ping(url, count){
let package = childProcess.exec(`ping -c ${count} ${url}`);

let dummyAnswer = `
64 bytes from losst.pro (5.45.95.135): icmp_seq=1 ttl=53 time=94.2 ms
64 bytes from losst.pro (5.45.95.135): icmp_seq=2 ttl=53 time=125 ms
64 bytes from losst.pro (5.45.95.135): icmp_seq=3 ttl=53 time=140 ms
64 bytes from losst.pro (5.45.95.135): icmp_seq=4 ttl=53 time=177 ms

--- losst.pro ping statistics ---
4 packets transmitted, 3 received, 0% packet loss, time 3001ms
rtt min/avg/max/mdev = 94.176/134.017/177.407/29.935 ms
`
let dummyErr = `ping: fgcteha.ru: Неизвестное имя или служба`

let trans = /\d+(?= packets transmitted)/m
let rec = /\d+(?= received)/m

if (trans != null && rec != null){ }
  else {err()}
};

function letsContinue(){
trans = Number(dummyAnswer.match(trans).join());
rec = Number(dummyAnswer.match(rec).join());

console.log(trans,rec)

switch (rec) {
  case trans: 
    console.log( `Всё отлично, сервер доступен, получено 100% пакетов` );
    break;
  case 0:
    console.log( `Cервер недоступен` );
    break;
  case rec>0 && rec<trans ? rec : true:
    console.log( `Cервер доступен, но замечена потеря ${100-((rec/trans)*100)}% пакетов` );
    break;
  default:
    err()
    break;
};

};

function err(){
  
}

//let timer = setInterval( ()=> ping(url, packCnt), time );
// timer;