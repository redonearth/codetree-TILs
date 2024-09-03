const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let isAllMultiples = true

for (let i = 0; i < input.length; i++) {
    if (input[i] % 3 !== 0) {
        isAllMultiples = false
    }
}

console.log(Number(isAllMultiples))