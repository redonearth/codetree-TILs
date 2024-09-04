const fs = require('fs')

const n = Number(fs.readFileSync(0).toString().trim())

let str = ''

for (let i = 0; i < n * 2; i += 2) {
    str = ''
    for (let j = 0; j < n * 2; j += 2) {
        str += `${i + j + 11} `
    }
    console.log(str)
}