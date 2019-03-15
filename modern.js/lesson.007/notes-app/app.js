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

document.querySelector("button#create-note").addEventListener("click", e => {
  console.log("Creating a new note");
});

document.querySelector("button#remove-all").addEventListener("click", e => {
  document.querySelectorAll("p.note").forEach(note => note.remove());
});

document.querySelector("input#filter-notes").addEventListener("input", e => {
  console.log(e.target.value);
});
