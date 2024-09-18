const fs = require('fs')

const n = Number(fs.readFileSync(0).toString().trim())

let str = '', cnt = 0

for (let i = 1; i < n; i++) {
    str = ''
    if (i % 2 !== 0) {
        for (let j = 1; j <= n; j++) {
            str += `${j} `
            cnt = n
        }
    } else {
        for (let j = n + 2; j <= n * 3; j += 2) {
            str += j
            cnt = n + 2
        }
    }
    console.log(str)
}