const noteId = location.hash.substring(1);

const $noteTitle = document.querySelector("#note-title");
const $noteBody = document.querySelector("#note-body");
const $removeNote = document.querySelector("#remove-note");

let notes = loadNotes();

const reloadData = (notes) => {
  const note = notes.find(note => note.id === noteId);

  if (note === undefined) {
    location.assign("./index.html");
  }

  $noteTitle.value = note.title;
  $noteBody.value = note.body;

  return note;
};

let note = reloadData(notes);

$noteTitle.addEventListener("input", e => {
  note.title = e.target.value;
  saveNotes(notes);
});

$noteBody.addEventListener("input", e => {
  note.body = e.target.value;
  saveNotes(notes);
});

$removeNote.addEventListener("click", e => {
  removeNote(noteId);
  saveNotes(notes);
  location.assign("./index.html");
});

window.addEventListener("storage", e => {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue)
    note = reloadData();
  }
});
