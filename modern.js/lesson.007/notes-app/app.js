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

const $button = document.querySelector("button");

// NOTE: using arrow function as event handler will
// bind "this" to the window object.
$button.addEventListener("click", e => {
  console.log(this); // this points to window

  // However, the DOM element is available via event.target
  e.target.textContent = "Clicked!";
});

$button.addEventListener("mouseout", e => {
  e.target.textContent = "Create Note";
});
