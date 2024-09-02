const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let cm3 = 0, cm5 = 0

for (let i = 0; i < input.length; i++) {
    if (input[i] % 3 === 0) {
        cm3++
    }

    if (input[i] % 5 === 0) {
        cm5++
    }
}

console.log(`${cm3} ${cm5}`)