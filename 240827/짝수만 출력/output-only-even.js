const fs = require('fs')

const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const answer = []

let i = a

while (i <= b) {
    answer.push(i)
    i += 2
}

console.log(answer.join(' '))