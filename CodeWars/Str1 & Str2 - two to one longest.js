let str1 = "aretheyhere";
let str2 = "yestheyarehere";

console.log(longest(str1, str2));

function longest(s1, s2) {
    let container = [];
    let str = s1 + s2;

    for (let char of str) {
        container.includes(char) ? char : container.push(char);
    }

    return container.sort().join('');
}

/*

Простейшее решение - использовать конструктор набора уникальных данных SET:

function longest(s1, s2) {
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
}

*/