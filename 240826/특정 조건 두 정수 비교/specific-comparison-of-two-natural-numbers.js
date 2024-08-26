const fs = require('fs')

const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const answer = []

if (a < b) {
    answer.push(1)
} else {
    answer.push(0)
}

if (a === b) {
    answer.push(1)
} else {
    answer.push(0)
}

console.log(answer.join(' '))