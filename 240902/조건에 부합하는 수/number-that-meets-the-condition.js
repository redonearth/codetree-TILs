const fs = require('fs')

const a = Number(fs.readFileSync(0).toString().trim())

const answer = []

for (let i = 1; i <= a; i++) {
    if ((i % 2 === 0 && i % 4 !== 0) || parseInt(i / 8) % 2 === 0 || i % 7 < 4) {
        continue
    }
    answer.push(i)
}

console.log(answer.join(' '))