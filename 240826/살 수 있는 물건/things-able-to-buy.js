const fs = require('fs')

const n = Number(fs.readFileSync(0).toString().trim())

const book = 3000
const mask = 1000

if (n >= book) {
    console.log('book')
} else if (n >= mask) {
    console.log('mask')
} else {
    console.log('no')
}