const fs = require('fs')

const input = fs.readFileSync(0).toString().trim()

let answer = ''

for (let i = 0; i < 8; i++) {
    answer += input
}

console.log(answer)