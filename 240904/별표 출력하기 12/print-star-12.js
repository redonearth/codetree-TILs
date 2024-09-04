const fs = require('fs')

const n = Number(fs.readFileSync(0).toString().trim())

let str = ''

for (let i = 0; i < n; i++) {
    str = ''
    for (let j = 0; j < n; j++) {
        if ((i > 0 && j % 2 === 0) || i > j) {
            str += '  '
        } else if (i === 0 || j % 2 === 1) {
            str += '* '
        }
    }
    console.log(str)
}