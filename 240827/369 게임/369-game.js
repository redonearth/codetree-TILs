const fs = require('fs')

const n = Number(fs.readFileSync(0).toString().trim())

const answer = []

for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || [...i.toString()].some(v => Number(v) % 3 === 0)) {
        answer.push(0)
    } else {
        answer.push(i)
    }
}

console.log(answer.join(' '))