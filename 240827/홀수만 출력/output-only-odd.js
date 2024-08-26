const fs = require('fs')

const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let answer = []

for (let i = a; i <= b; i += 2) {
    answer.push(i)
}

console.log(answer.join(' '))