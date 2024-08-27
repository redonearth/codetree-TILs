const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split('\n')

const N = input[0]

for (let i = 1; i < N; i++) {
    let n = input[i]

    if (n % 2 !== 0 && n % 3 === 0) {
        console.log(n)
    }
}