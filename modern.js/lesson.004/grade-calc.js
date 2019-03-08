const gradeCalc = function(score, totalScore = 100) {
    let percent = Math.round((score / totalScore) * 100)

    let letter = 'F'
    if (percent >= 90) {
        letter = 'A'
    } else if (percent >= 80) {
        letter = 'B'
    } else if (percent >= 70) {
        letter = 'C'
    } else if (percent >= 60) {
        letter = 'D'
    }

    return `You got a ${letter} (${percent}%)`
}

console.log(gradeCalc(95))
console.log(gradeCalc(80))
console.log(gradeCalc(75))
console.log(gradeCalc(62))
console.log(gradeCalc(40))