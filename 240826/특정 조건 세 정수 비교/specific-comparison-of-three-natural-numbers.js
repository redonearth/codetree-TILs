const fs = require('fs')

const [a, b, c] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const answer = []

if (Math.min(a, b, c) === a) {
    answer.push(1)
} else {
    answer.push(0)
}

if (a === b === c) {
    answer.push(1)
} else {
    answer.push(0)
}

console.log(answer.join(' '))