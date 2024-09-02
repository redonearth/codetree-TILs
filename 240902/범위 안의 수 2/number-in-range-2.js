const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let sum = 0, cnt = 0

for (let i = 0; i < input.length; i++) {
    if (input[i] >= 0 && input[i] <= 200) {
        sum += input[i]
        cnt++
    }
}

console.log(`${sum} ${(sum / cnt).toFixed(1)}`)