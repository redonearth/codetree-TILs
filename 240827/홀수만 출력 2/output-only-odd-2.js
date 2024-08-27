const fs = require('fs')

const [b, a] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const answer = []

for (let i = b; i >= a; i -= 2) {
    answer.push(i)
}

console.log(answer.join(' '))