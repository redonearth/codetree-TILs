const fs = require('fs')

const n = Number(fs.readFileSync(0).toString().trim())

const answer = []

for (let i = 1; i <= n; i++) {
    if (i % 2 === 0 || i % 3 === 0) {
        answer.push(1)
    } else {
        answer.push(0)
    }
}

console.log(answer.join(' '))