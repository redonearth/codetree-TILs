const fs = require('fs')

let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let answer = `${parseInt(a / b)}.`

a %= b

for (let i = 0; i < 20; i++) {
    a *= 10
    answer += parseInt(a / b)

    a %= b
}

console.log(answer)