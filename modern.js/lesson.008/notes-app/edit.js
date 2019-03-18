const noteId = location.hash.substring(1);
const notes = loadNotes();
const note = notes.find(note => note.id === noteId);

if (note === undefined) {
  location.assign("./index.html");
}

const $noteTitle = document.querySelector("#note-title");
$noteTitle.value = note.title;
$noteTitle.addEventListener("input", e => {
  note.title = e.target.value;
  saveNotes(notes);
});

const $noteBody = document.querySelector("#note-body");
$noteBody.value = note.body;
$noteBody.addEventListener("input", e => {
  note.body = e.target.value;
  saveNotes(notes);
});

document.querySelector("#remove-note").addEventListener("click", e => {
  removeNote(note.id);
  saveNotes(notes);
  location.assign("./index.html");
});
