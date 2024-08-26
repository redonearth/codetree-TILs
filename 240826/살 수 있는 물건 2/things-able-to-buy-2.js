const fs = require('fs')

const n = Number(fs.readFileSync(0).toString().trim())

const book = 3000
const mask = 1000
const pen = 500

if (n >= book) {
    console.log('book')
} else if (n >= mask) {
    console.log('mask')
} else if (n >= pen) {
    console.log('pen')
} else {
    console.log('no')
}