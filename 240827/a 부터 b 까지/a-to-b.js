const fs = require('fs')

let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const answer = []

for (let i = a; i <= b;) {
    answer.push(i)

    if (i % 2 === 0) {
        i += 3
    } else {
        i *= 2
    }
}

console.log(answer.join(' '))