const fs = require('fs')
const input = fs.readFileSync(0).toString()
const n = Number(input)
let answer = ''

for (let i = 0; i < n; i++) {
    answer = ''
    for (let j = 0; j < n; j++) {
        answer += j + 1
    }
    console.log(answer)
}