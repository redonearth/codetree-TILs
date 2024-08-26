const fs = require('fs')

const [a, b, c] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let answer;

if (a >= b) {
    if (a >= c) {
        answer = a
    } else {
        answer = c
    }
} else {
    if (b >= c) {
        answer = b
    } else {
        answer = c
    }
}

console.log(answer)