const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let even = 0

for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 === 0) even++
}

console.log(even)