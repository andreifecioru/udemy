const loadNotes = () => {
  const notesJSON = localStorage.getItem("notes");

  return notesJSON === null ? [] : JSON.parse(notesJSON);
};

const saveNotes = notes => localStorage.setItem("notes", JSON.stringify(notes));

const generateNoteDOM = note => {
  const $note = document.createElement("p");

  $note.textContent = note.title.length > 0 ? note.title : "New note";
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
