const fs = require('fs')

const n = Number(fs.readFileSync(0).toString().trim())

if (n === 2) {
    console.log(28)
} else if (n <= 7) {
    console.log(n % 2 === 0 ? 30 : 31)
} else {
    console.log(n % 2 !== 0 ? 30 : 31)
}