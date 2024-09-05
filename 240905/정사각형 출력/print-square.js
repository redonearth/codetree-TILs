const fs = require('fs')

const n = Number(fs.readFileSync(0).toString().trim())

let str = '', cnt = 0

for (let i = 0; i < n; i++) {
    str = ''
    for (let j = 0; j < n; j++) {
        str += `${cnt + 1} `
        cnt++
    }
    console.log(str)
}