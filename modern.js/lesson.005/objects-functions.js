const tempConvert = function(f) {
    return {
        f: f,
        c: (f - 32) * (5/9),
        k: (f + 459.67) * (5/9)
    }
}

console.log(tempConvert(32))
console.log(tempConvert(68))
