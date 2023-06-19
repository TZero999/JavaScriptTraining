let time = [ 2, 1.4, 12.3, 0.82, 11.8, 1787, 0 ];

for (let hours of time) {
    console.log( litres(hours) );
};


function litres(time) {
    return Math.floor(time*0.5);
}