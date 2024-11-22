const fs = require('fs')
const n = Number(fs.readFileSync(0).toString().trim())

let num = 0

for (let i = 0; i < n; i++) {
    let str = ''
    for (let j = 0; j < i; j++) {
        str += '  '
    }
    for (let j = n - i; j >= 1; j--) {
        num++
        if (num > 9) num = 1
        str += `${num} `
    }
    console.log(str)
}