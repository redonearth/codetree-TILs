const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let index = 0
let sum = 0, cnt = 0

while (true) {
    let age = input[index]
    index++

    if (age > 29) break
    sum += age
    cnt++
}

console.log((sum / cnt).toFixed(2))