const fs = require('fs')

const n = Number(fs.readFileSync(0).toString().trim())

let str = ''

for (let i = 0; i < n; i++) {
    str = ''
    for (let j = 0; j < n - 1 - i; j++) {
        str += '  '
    }
    for (let j = 0; j < i + 1; j++) {
        str += '@ '
    }
    console.log(str)
}

for (let i = 0; i < n; i++) {
    str = ''
    for (let j = 0; j < n - 1 - i; j++) {
        str += '@ '
    }
    console.log(str)
}