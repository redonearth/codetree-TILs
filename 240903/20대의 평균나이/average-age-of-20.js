const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let sum = 0, cnt = 0

while (true) {
    let age = input[cnt]

    // if (age < 20 || age >= 30) {
    if (parseInt(age / 10) !== 2) {
        console.log((sum / cnt).toFixed(2))
        break
    }
    sum += age
    cnt++
}