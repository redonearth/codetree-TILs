const fs = require('fs')

const [a, b, c] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let answer;

if (a > b && a > c) {
    answer = a
} else if (b > a && b > c) {
    answer = b
} else {
    answer = c
}

console.log(answer)