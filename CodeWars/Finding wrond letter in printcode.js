let str = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";

console.log(printerError(str));
console.log(easer(str))

function printerError(str) {
    let errors = 0;
    let errChar = /[n-z]/i;

    for (let char of str) {
        if (errChar.test(char)) errors++;
        console.log(`${char} : ${errors}`)
    }
    return String(`${errors}/${str.length}`);
}

function easer(str) {
    return `Easer method: ${str.replace(/[a-m]/gi, "").length}/${str.length}`
}

/*
Чужое простейшее решение:
const printerError = s => `${s.replace(/[a-m]/gi, "").length} / ${s.length}`;
*/