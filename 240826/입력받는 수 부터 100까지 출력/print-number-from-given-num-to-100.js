const fs = require('fs')

const n = Number(fs.readFileSync(0).toString().trim())

let answer = ''

for (let i = n; i <= 100; i++) {
    answer += `${i} `
}

console.log(answer)