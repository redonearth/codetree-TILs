const fs = require('fs')

const n = Number(fs.readFileSync(0).toString().trim())

let str = ''

for (let i = 0; i < n; i++) {
    str = ''
    for (let j = 1; j < n - 1; j++) {
        for (let k = 0; k < n - i; k++) {
            str += '*'
        }
        for (let k = 1; k < i * 2 + 1; k++) {
            str += ' '
        }
    }
    console.log(str)
}