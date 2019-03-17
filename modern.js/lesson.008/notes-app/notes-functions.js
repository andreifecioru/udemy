const loadNotes = () => {
  const notesJSON = localStorage.getItem("notes");

  return notesJSON === null ? [] : JSON.parse(notesJSON);
};

const saveNotes = notes => localStorage.setItem("notes", JSON.stringify(notes));

const removeNote = id => {
  const idx = notes.findIndex(note => note.id === id);
  if (idx >= 0) {
    notes.splice(idx, 1);
  }
};

const generateNoteDOM = note => {
  const $note = document.createElement("div");

  const $button = document.createElement("button");
  $button.textContent = "x";
  $button.addEventListener("click", () => {
    removeNote(note.id);
    saveNotes(notes);
    renderNotes(notes, filters);
  });

  const $span = document.createElement("span");
  $span.textContent = note.title.length > 0 ? note.title : "New note";

  $note.appendChild($span);
  $note.appendChild($button);

  document.querySelector("#notes-area").appendChild($note);
};

const renderNotes = (notes, filters) => {
  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  );

  // clear the notes area
  document.querySelector("#notes-area").innerHTML = "";

  // add the newly-filtered notes
  filteredNotes.forEach(generateNoteDOM);
};
