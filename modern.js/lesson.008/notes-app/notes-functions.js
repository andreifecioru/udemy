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

  const $link = document.createElement("a");
  $link.textContent = note.title.length > 0 ? note.title : "New note";
  $link.setAttribute("href", `./edit.html#${note.id}`);

  $note.appendChild($link);
  $note.appendChild($button);

  document.querySelector("#notes-area").appendChild($note);
};

const filterNotes = (notes, sortBy) => {
  switch (sortBy) {
    case "lastEdited":
      console.log("Sorting by last edited")
      notes.sort((n1, n2) => n2.updatedAt - n1.updatedAt);
      break;
    case "recentlyCreated":
      console.log("Sorting by recently created")
      notes.sort((n1, n2) => n2.createdAt - n1.createdAt);
      break;
    case "alphabetical":
      console.log("Sorting by alphabetically")
      notes.sort((n1, n2) => {
        if (n1.title < n2.title) return -1;
        if (n1.title > n2.title) return 1;
        return 0;
      });
      break;
    default:
      console.log(`Unknown sorting order: ${sortBy}`);
  }
  return notes;
};

const renderNotes = (notes, filters) => {
  notes = filterNotes(notes, filters.sortBy);

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  );

  // clear the notes area
  document.querySelector("#notes-area").innerHTML = "";

  // add the newly-filtered notes
  filteredNotes.forEach(generateNoteDOM);
};
