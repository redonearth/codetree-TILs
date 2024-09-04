const fs = require('fs')

const n = Number(fs.readFileSync(0).toString().trim())

let str = ''

for (let i = 0; i < n; i++) {
    str = ''
    for (let j = 0; j < n * 2; j++) {
        if (j < n - i || j >= n + i) {
            str += '*'
        } else {
            str += ' '
        }
    }
    console.log(str)
}