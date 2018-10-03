import myLocation, /* grab the defualt export */ { message, name, getGreeting} from './mymodule'
import add, { sub } from './math'

console.log(message)
console.log(name)
console.log(myLocation)
console.log(getGreeting(name))

console.log(`3 + 2 = ${add(3, 2)}`)
console.log(`3 - 2 = ${sub(3, 2)}`)