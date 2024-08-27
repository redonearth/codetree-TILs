const fs = require('fs')

const n = Number(fs.readFileSync(0).toString().trim())

const answer = []

let i = n

while (i >= 1) {
    answer.push(i)
    i--
}

console.log(answer.join(' '))