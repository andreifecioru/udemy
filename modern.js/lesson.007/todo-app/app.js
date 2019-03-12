console.log("TODO app");

const paragraphs = document.querySelectorAll("p");

// Remove all "p" tags that have "the" in their text
// NOTE: "paragraphs" is a NoteList instance (not an array)
Array.from(paragraphs)
	.filter(p => p.textContent.includes("the"))
	.forEach(p => p.remove());


