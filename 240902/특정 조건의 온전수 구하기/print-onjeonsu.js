const fs = require('fs')

const n = Number(fs.readFileSync(0).toString().trim())

const answer = []

for (let i = 1; i <= n; i++) {
    if (i % 2 === 0 || i.toString().at(-1) === '5' || i % 3 === 0 && i % 9 !== 0) {
        continue
    }
    answer.push(i)
}

console.log(answer.join(' '))