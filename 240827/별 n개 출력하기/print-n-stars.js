const fs = require('fs')

const n = Number(fs.readFileSync(0).toString().trim())

let i = 0

while (i < n) {
    console.log('*')
    i++
}