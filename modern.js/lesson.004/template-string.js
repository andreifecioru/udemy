const computeTip = function(total, tipPercent = .2) {
    return `A ${tipPercent * 100}% tip on a total of ${total}$ would be ${total * tipPercent}$`
}

console.log(computeTip(100))
console.log(computeTip(300, .1))