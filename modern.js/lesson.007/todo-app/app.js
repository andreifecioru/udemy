const todos = [
  { text: "eat", completed: false },
  { text: "play", completed: false },
  { text: "work", completed: true },
  { text: "watch tv", completed: false }
];

console.log("Andrei");

const filters = {
  searchText: ""
};

const renderTodos = function(todos) {
  const $todoArea = document.querySelector("div#todo-area");

  // remove all existing todos
  document.querySelector("div#todo-area").innerHTML = "";

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
  );

  const incompleteTodos = filteredTodos.filter(p => !p.completed);

  // add the new todos
  filteredTodos.forEach((todo, idx) => {
    const todoText = `${idx + 1}. ${todo.text} (${
      todo.completed ? "completed" : "in progress"
    })`;
    const $todo = document.createElement("p");
    $todo.textContent = todoText;
    $todoArea.appendChild($todo);
  });

  const $summary = document.createElement("h3");
  $summary.textContent = `You have ${
    incompleteTodos.length
  } TODOs left in progress.`;
  $todoArea.appendChild($summary);
};

document.querySelector("#search-box").addEventListener("input", e => {
  filters.searchText = e.target.value;

  renderTodos(todos, filters);
});

document.querySelector("#todo-form").addEventListener("submit", e => {
  e.preventDefault();

  const todoText = e.target.elements.newTodo.value;
  e.target.elements.newTodo.value = "";

  if (todoText != "") {
    todos.push({
      text: todoText,
      completed: false
    });

    renderTodos(todos, filters);
  }
});

renderTodos(todos, filters);
