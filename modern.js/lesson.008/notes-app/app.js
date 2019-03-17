let notes = [];

const filters = {
  searchText: ""
};

const notesJSON = localStorage.getItem("notes");

if (notesJSON !== null) {
  notes = JSON.parse(notesJSON);
}

const renderNotes = (notes, filters) => {
  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  );

  // clear the notes area
  document.querySelectorAll("#notes-area > p").forEach($el => $el.remove());

  // add the newly-filtered notes
  filteredNotes.forEach(note => {
    const $note = document.createElement("p");

    $note.textContent = note.title.length > 0 ? note.title : "New note";
    document.querySelector("#notes-area").appendChild($note);
  });
};

renderNotes(notes, filters);

document.querySelector("button#create-note").addEventListener("click", e => {
  notes.push({
    title: "",
    body: ""
  });

  localStorage.setItem("notes", JSON.stringify(notes));

  renderNotes(notes, filters);
});

document.querySelector("#filter-notes").addEventListener("input", e => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#notes-form").addEventListener("submit", e => {
  e.preventDefault();

  const firstName = e.target.elements.firstName.value;
  e.target.elements.firstName.value = "";

  console.log(firstName);
});

document.querySelector("#filter-by").addEventListener("change", e => {
  console.log(e.target.value);
});
