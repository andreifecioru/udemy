const notes = ['Note 1', 'Note 2', 'Note 3']

notes.unshift('Unshift: note 1', 'Unshift: note 2')
console.log(notes)

notes.splice(2, 2, 'New note 1', 'New note 2')
console.log(notes)

notes.forEach(function(item, idx) {
    console.log(`${idx}: ${item}`)
})

for (let i = notes.length - 1; i >= 0; i--) {
    console.log(`${i}: ${notes[i]}`)
}