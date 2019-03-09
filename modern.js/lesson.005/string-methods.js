const isValidPassword = function(password) {
    return password.length >= 8 && !password.includes('password')
}

console.log(isValidPassword('dfljgf'))
console.log(isValidPassword('fhglahflshgflietnbv'))
console.log(isValidPassword('fjggd305405password'))