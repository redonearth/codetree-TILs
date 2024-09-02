const fs = require('fs')

const n = Number(fs.readFileSync(0).toString().trim())

let m = 1

for (let i = 1; i <= 10; i++) {
    m *= i
    if (m >= n) {
        console.log(i)
        break
    }
}