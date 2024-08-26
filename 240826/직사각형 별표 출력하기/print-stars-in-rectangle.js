const fs = require('fs')
const [n, m] = fs.readFileSync(0).toString().split(' ')
let answer = ''

for (let i = 0; i < n; i++) {
    answer = ''

    for (let j = 0; j < m; j++) {
        answer += '* '
    }

    console.log(answer)
}