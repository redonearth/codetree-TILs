const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split('\n').map(Number)

const students = ['John', 'Tom', 'Paul', 'Sam']

let index = 0

while (true) {
    let rollNum = input[index]
    let student = students[rollNum - 1]

    index++

    if (rollNum > students.length) {
        console.log('Vacancy')
        break
    }
    console.log(student)
}