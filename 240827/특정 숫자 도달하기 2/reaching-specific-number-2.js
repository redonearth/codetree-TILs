const fs = require('fs')

const n = Number(fs.readFileSync(0).toString().trim())

const answer = []

for (let i = n; i >= 1; i--) {
    answer.push(i)
}

console.log(answer.join(' '))