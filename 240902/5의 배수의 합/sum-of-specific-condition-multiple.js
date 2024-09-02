const fs = require('fs')

const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let sumM5 = 0

for (let i = a; i <= b; i++) {
    if (i % 5 === 0) {
        sumM5 += i
    }
}

console.log(sumM5)