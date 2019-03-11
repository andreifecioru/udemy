const notes = [
    {
        tile: 'My next trip',
        body: 'I would like to go to Spain.'
    },
    {
        tile: 'Habits to work on',
        body: 'Exercise. Eat better'
    },
    {
        tile: 'Office modification',
        body: 'Get a new seat'
    },
    {}
]

console.log(notes)

// What counts is the object reference not the content
console.log(notes.indexOf({}))  // false

// NOTE: obj1 === obj2 if they point to the
// same object instance in memory (even if they have the same props)

console.log('\n---------------------\n')

// When searching by object content is Array#findIndex()
let noteIdx = notes.findIndex(function (note, idx) {
    return note.tile === 'Habits to work on'
})
console.log(noteIdx)