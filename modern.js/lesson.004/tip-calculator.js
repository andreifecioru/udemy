const computeTip = function(total, tipPercent = .2) {
    return total * tipPercent
}

let total = 100
console.log(`Default tip for a total of ${total}$ is: ${computeTip(total)}$`)
console.log(`Default tip for a total of ${total}$ is: ${computeTip(total, .3)}$`)
