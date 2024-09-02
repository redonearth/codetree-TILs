const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let index = 0

while (true) {
    let num = input[index]

    if (num === 25) {
        console.log('Good')
        break
    } else if (num < 25) {
        console.log('Higher')
    } else if (num > 25) {
        console.log('Lower')
    }
    index++
}