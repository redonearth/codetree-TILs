const fs = require('fs')

const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let sumM5 = 0

const min = Math.min(a, b)
const max = Math.max(a, b)

for (let i = min; i <= max; i++) {
    if (i % 5 === 0) {
        sumM5 += i
    }
}

console.log(sumM5)