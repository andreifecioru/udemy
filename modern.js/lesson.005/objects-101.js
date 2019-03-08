const me = {
    name: 'Andrei',
    age: 37,
    location: 'Bucharest'
}

const constructMessage = function(person) {
    return `${person.name} is ${person.age} and lives in ${person.location}.`
}

console.log(constructMessage(me))

me.age ++

console.log(constructMessage(me))