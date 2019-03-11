const notes = [
  {
    title: "My next trip",
    body: "I would like to go to Spain."
  },
  {
    title: "Habits to work on",
    body: "Exercise. Eat better"
  },
  {
    title: "Office modification",
    body: "Get a new seat"
  }
];

// This is the same as Array#find()
const findNote = function(notes, noteTitle) {
  const idx = notes.findIndex(function(note, idx) {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });

  return notes[idx];
};

const findNote2 = function(notes, noteTitle) {
  return notes.find(function(note, idx) {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
};

console.log(findNote(notes, "habits to work on"));
console.log(findNote2(notes, "office modification"));
