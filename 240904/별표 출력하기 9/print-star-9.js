const fs = require('fs')

const n = Number(fs.readFileSync(0).toString().trim())

let str = ''

for (let i = 0; i < n; i++) {
    str = ''
    for (let j = 0; j < n - i - 1; j++) {
        str += '  '
    }
    for (let j = 0; j < (i * 2) + 1; j++) {
        str += '* '
    }
    console.log(str)
}