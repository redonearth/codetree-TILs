const fs = require('fs')

const n = Number(fs.readFileSync(0).toString().trim())

const answer = []

let i = 1

while (i <= n) {
    answer.push(i)
    i++
}

console.log(answer.join(' '))