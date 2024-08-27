const fs = require('fs')

const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const answer = []

if (a > b) {
    for (let i = a; i >= b; i--) {
        answer.push(i)
    }
} else {
    for (let i = b; i >= a; i--) {
        answer.push(i)
    }
}

console.log(answer.join(' '))