let notes = loadNotes();

const filters = {
  searchText: "",
  sortBy: "lastEdited"
};

// initial rendering of the notes
renderNotes(notes, filters);

// event-handler for creating a new note
document.querySelector("button#create-note").addEventListener("click", e => {
  const now = moment().valueOf();

  // construct a new note
  const newNote = {
    id: uuidv4(),
    title: "New note",
    body: "",
    createdAt: now,
    updatedAt: now
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
  filters.sortBy = e.target.value;
  renderNotes(notes, filters);
});

window.addEventListener("storage", e => {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
  }
});

const birthDate = moment();
birthDate
  .year(1981)
  .month("June")
  .date(24);
console.log(birthDate.format("MMMM Do, YYYY"));
console.log(birthDate.fromNow());
