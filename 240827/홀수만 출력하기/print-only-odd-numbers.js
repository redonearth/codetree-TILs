const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split('\n')

for (let i = 0; i < input.length; i++) {
    let n = input[i]

    if (n % 2 !== 0 && n % 3 === 0) {
        console.log(n)
    }
}