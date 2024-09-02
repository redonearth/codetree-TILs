const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let index = 0

while (true) {
    let num = input[index]
    index++

    if (num % 2 === 0) {
        console.log(num / 2)
    }

    if (index > 3) break
}