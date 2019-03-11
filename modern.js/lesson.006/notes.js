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

console.log("\n------------------\n");

const findNotes = function(notes, query) {
  const _query = query.toLowerCase();

  return notes.filter(function(note, idx) {
    const isTitleMatch = note.title.toLowerCase().includes(_query);
    const isBodyMatch = note.body.toLowerCase().includes(_query);

    return isTitleMatch || isBodyMatch;
  });
};

console.log(findNotes(notes, "ne"));

console.log("\n----------------------\n");

const sortNotes = function(notes) {
  notes.sort(function(note, otherNote) {
    const title = note.title.toLowerCase();
    const otherTitle = otherNote.title.toLowerCase();

    if (title < otherTitle) return -1;
    if (title > otherTitle) return 1;

    return 0;
  });
};

sortNotes(notes)
console.log(notes);