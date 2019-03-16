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

const filters = {
  searchText: ""
};

const renderNotes = (notes, filters) => {
  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  );

  // clear the notes area
  document.querySelectorAll("#notes-area > p").forEach($el => $el.remove());

  // add the newly-filtered notes
  filteredNotes.forEach(note => {
    const $note = document.createElement("p");
    $note.textContent = note.title;
    document.querySelector("#notes-area").appendChild($note);
  });
};

renderNotes(notes, filters);

document.querySelector("button#create-note").addEventListener("click", e => {
  console.log("Creating a new note");
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
  console.log(e.target.value)
})
