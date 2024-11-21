const fs = require('fs')
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

for (let j = 2; j <= 8; j += 2) {
    let str = ''
    for (let i = b; i >= a; i--) {
        str += `${i} * ${j} = ${i * j}`
        if (i > a) {
            str += ' / '
        }
    }
    console.log(str)
}