const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split('\n')

let answer = 0
const clinic = (person) => {
    const [symptoms, temperature] = person.split(' ')
    if (symptoms === 'Y' && temperature >= 37) {
        answer++
    }
}

for (let person of input) {
    clinic(person)
}

console.log(answer >= 2 ? 'E' : 'N')