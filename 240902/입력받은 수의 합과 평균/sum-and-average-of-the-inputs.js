const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split('\n').map(Number)

const n = input[0]

let sum = 0, cnt = 0

for (let i = 1; i <= n; i++) {
    sum += input[i]
    cnt++
}

console.log(sum, (sum / cnt).toFixed(1))