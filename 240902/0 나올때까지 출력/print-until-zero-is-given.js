const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let i = 0

while (true) {
    let n = Number(input[i])
    i++

    if (n === 0) break
    
    console.log(n)
}