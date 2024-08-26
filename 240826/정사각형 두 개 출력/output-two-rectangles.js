const fs = require('fs')
const input = fs.readFileSync(0).toString()
const n = Number(input)

let answer = ''

for (let i = 0; i < 2; i++) {
    for (let j = 0; j < n; j++) {
        answer = ''

        for (let k = 0; k < n; k++) {
            answer += '*'
        }

        console.log(answer)
    }
    console.log(' ')
}