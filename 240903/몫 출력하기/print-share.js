const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let index = 0
let cnt = 0

while (true) {
    let num = input[index]
    index++

    if (num % 2 === 0) {
        console.log(num / 2)
        cnt++
    }

    if (cnt === 3) break
}