const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split('\n')

const commands = [...input[0]]
const arr = input[2].split(' ')

for (let command of commands) {
    if (command === 'D') {
        if (!arr.length) {
            return console.log('error')
        }
        arr.shift()
    }

    if (command === 'R') {
        arr.reverse()
    }
}

console.log(arr.length ? arr.join(' ') : 'error')