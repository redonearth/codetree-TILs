const fs = require('fs')
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const start = b % 2 === 0 ? b : b - 1

for (let j = 1; j <= 9; j++) {
    let str = ''
    for (let i = start; i >= a; i -= 2) {
        str += `${i} * ${j} = ${i * j}`
        if (i > a) {
            str += ' / '
        }
    }
    console.log(str)
}