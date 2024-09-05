const fs = require('fs')

const n = Number(fs.readFileSync(0).toString().trim())

let str = '', cnt = 9

for (let i = 0; i < n; i++) {
    str = ''
    for (let j = n; j > 0; j--) {
        str += cnt
        cnt--
        if (cnt < 1) {
            cnt = 9
        }
    }
    console.log(str)
}