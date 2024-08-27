const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split(' ')

const c = input[0]
const n = Number(input[1])

const answer = []

if (c === 'A') {
    for (let i = 1; i <= n; i++) {
        answer.push(i)
    }
} else if (c === 'D') {
    for (let i = n; i >= 1; i--) {
        answer.push(i)
    }
}

console.log(answer.join(' '))