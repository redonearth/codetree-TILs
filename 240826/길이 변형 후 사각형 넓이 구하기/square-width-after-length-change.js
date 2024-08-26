const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ')

const width = Number(input[0])
const height = Number(input[1])

const calcWidth = width + 8
const calcHeight = height * 3
const area = calcWidth * calcHeight

console.log(`${calcWidth}\n${calcHeight}\n${area}`)