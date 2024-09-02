const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split('\n')

let cnt = 0

for (let i = 0; i < input.length; i++) {
    if (i % 2 !== 0) cnt++
}

console.log(cnt)