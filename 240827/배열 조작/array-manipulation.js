const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split('\n')

const commands = [...input[0]]
const arr = input[2].split(' ')

for (let command of commands) {
    if (command === 'R') {
        arr.reverse()
    }

    if (command === 'D') {
        if (arr.length) {
            arr.shift()
        }
    }
}

console.log(arr.length ? arr.join(' ') : 'error')