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

const refreshTodos = function(todos) {
  const $todoArea = document.querySelector("div#todo-area");

  // remove all existing todos
  document.querySelectorAll("div#todo-area > p").forEach(p => p.remove());

  // add the new todos
  todos.forEach((todo, idx) => {
    const todoText = `${idx + 1}. ${todo.text}`;
    const $todo = document.createElement("p");
    $todo.textContent = todoText;
    $todoArea.appendChild($todo);
  });
};

const $button = document.querySelector("button#add-todo");
const $newTodoInput = document.querySelector("input#new-todo");
$button.addEventListener("click", e => {
  console.log("Adding a new TODO item.");
  todos.push({
    text: $newTodoInput.value,
    completed: false
  });

  refreshTodos(todos);
});

refreshTodos(todos);
