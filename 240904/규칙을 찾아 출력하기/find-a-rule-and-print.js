const fs = require('fs')

const n = Number(fs.readFileSync(0).toString().trim())

let str = ''

for (let i = 0; i < n; i++) {
    str = ''
    for (let j = 0; j < n; j++) {
        if (n < 2) {
            str += '* '
        } else {
            if ((i !== 0 && j !== 0) && (i !== n - 1 && j !== n - 1) && i <= j) {
                str += '  '
            } else {
                str += '* '
            }
        }
    }
    console.log(str)
}