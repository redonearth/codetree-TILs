const fs = require('fs')

const n = Number(fs.readFileSync(0).toString().trim())

const answer = []

let i = 3

while (i <= n) {
    answer.push(i)
    i += 3
}

console.log(answer.join(' '))