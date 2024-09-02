const fs = require('fs')

const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let cnt = 0, sum = 0, avg = 0

for (let i = a; i <= b; i++) {
    if (i % 5 === 0 || i % 7 === 0) {
        cnt++
        sum += i
    }
}
avg = (sum / cnt).toFixed(1)

console.log(`${sum} ${avg}`)