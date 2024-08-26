const fs = require('fs')

const n = Number(fs.readFileSync(0).toString().trim())

const lastDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

if (n > 0) {
    console.log(lastDays[n - 1])
}