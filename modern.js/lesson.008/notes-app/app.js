let notes = loadNotes();

const filters = {
  searchText: ""
};

// initial rendering of the notes
renderNotes(notes, filters);

// event-handler for creating a new note
document.querySelector("button#create-note").addEventListener("click", e => {
  // construct a new note
  const newNote = {
    id: uuidv4(),
    title: "New note",
    body: ""
  };

  // add a new note to the list of notes
  notes.push(newNote);

  // persist the new list of notes
  saveNotes(notes);

  // go to the "edit" page
  location.assign(`./edit.html#${newNote.id}`);
});

// event-handler for filtering notes
document.querySelector("#filter-notes").addEventListener("input", e => {
  // update the filter's search term
  filters.searchText = e.target.value;

  // re-render the note list (with the updated filter)
  renderNotes(notes, filters);
});

// event handler for the sorting drop-down UI control
document.querySelector("#sort-by").addEventListener("change", e => {
  console.log(e.target.value);
});

window.addEventListener("storage", e => {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
  }
});
