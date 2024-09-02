const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split('\n')

let index = 0

while (true) {
    let [width, height, char] = input[index].split(' ')
    index++

    console.log(Number(width) * Number(height))

    if (char === 'C') break
}