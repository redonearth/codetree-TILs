const fs = require('fs')

const [b, a] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const answer = []

let i = b

while (i >= a) {
    answer.push(i)
    i -= 2
}

console.log(answer.join(' '))