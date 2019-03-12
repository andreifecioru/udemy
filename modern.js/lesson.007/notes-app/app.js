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

// Matches only the first paragraph occurrence
const paragraph = document.querySelector("p");
console.log(paragraph);

// Match all paragraph occurrences
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);
paragraphs.forEach(p => {
  // p.remove();
  // We can also change the paragraph text
  // p.textContent = "******";

  console.log(p.textContent);
});

// Add a new element
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph";
document.querySelector("body").appendChild(newParagraph);
