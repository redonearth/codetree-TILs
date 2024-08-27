const fs = require('fs')

const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let answer = ''

const condition = a > 0

if (condition) {
    for (let i = 0; i < b; i++) {
        answer += a
    }
}

console.log(condition ? answer : 0)