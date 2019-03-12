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
})
