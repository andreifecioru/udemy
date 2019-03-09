const makeGuess = function(guess) {
    const min = 1
    const max = 5
    const num = Math.floor(Math.random() * (max - min +1)) + min

    return num === guess
}

for (let i = 1; i <= 100; i++) {
    console.log(`At attempt ${i} is 3 the correct guess? ${makeGuess(3)}`)
}