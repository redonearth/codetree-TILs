const fs = require('fs')

const N = Number(fs.readFileSync(0).toString().trim())

let x = 1

while (true) {
    x++
    if (N === 2 ** x) {
        console.log(x)
        break
    }
}