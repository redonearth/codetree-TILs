const fs = require('fs')

const a = Number(fs.readFileSync(0).toString().trim())

if (a % 3 === 0 || a % 5 === 0) {
    console.log(1)
} else {
    console.log(0)
}