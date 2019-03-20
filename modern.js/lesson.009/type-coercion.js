console.log("5" + 5) // "55" - number coerced to string
console.log("5" - 5) // 0 - string coerced to number
console.log("5" == 5) // true
console.log(true + 5) // 6 - boolean coerced to number (true -> 1, false -> 0)
console.log(true + "5") // true5 - boolean coerced to string


// NOTE: type coercion works only on numbers, strings or booleans

// Type checking
console.log(typeof 1) // number
console.log(typeof false) // boolean
console.log(typeof "1") // string
console.log(typeof []) // object
console.log(typeof {}) // object
console.log(typeof null) // object
console.log(typeof undefined) // undefined
