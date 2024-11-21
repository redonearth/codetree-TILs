const fs = require('fs')
const n = Number(fs.readFileSync(0).toString().trim())

let sum = 0

for (let i = 1; i <= n; i++) {
    let str = ''
    for (let j = 1; j <= i; j++) {
        sum += 1
        str += `${sum} `
    }
    console.log(str)
}