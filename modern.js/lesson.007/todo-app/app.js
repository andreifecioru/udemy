const todos = [
  { text: "eat", completed: false },
  { text: "play", completed: false },
  { text: "work", completed: true },
  { text: "watch tv", completed: false }
];

const incompleteTodos = todos.filter(p => !p.completed);

const $body = document.querySelector("body");
const $summary = document.createElement("h3");
$summary.textContent = `You have ${incompleteTodos.length} TODOs left.`;
$body.appendChild($summary);

todos.forEach((todo, idx) => {
  const todoText = `${idx + 1}. ${todo.text}`;
  const $todo = document.createElement("p");
  $todo.textContent = todoText;
  $body.appendChild($todo);
});
