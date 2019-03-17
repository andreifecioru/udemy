let todos = [];

const filters = {
  searchText: "",
  hideCompleted: false
};

// Load data from local storage
const todosJSON = localStorage.getItem("todos");
if (todosJSON !== null) {
  todos = JSON.parse(todosJSON);
}

const renderTodos = function(todos, filters) {
  const $todoArea = document.querySelector("div#todo-area");

  // remove all existing todos
  document.querySelector("div#todo-area").innerHTML = "";

  const filteredTodos = todos
    .filter(todo =>
      todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    )
    .filter(todo => {
      if (filters.hideCompleted) {
        return !todo.completed;
      }

      return true;
    });

  const incompleteTodos = todos.filter(todo => !todo.completed);

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

  document.querySelector("#hide-completed").checked = filters.hideCompleted;
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

    // save the data in local storage
    localStorage.setItem("todos", JSON.stringify(todos));

    renderTodos(todos, filters);
  }
});

document.querySelector("#hide-completed").addEventListener("change", e => {
  filters.hideCompleted = e.target.checked;
  renderTodos(todos, filters);
});

renderTodos(todos, filters);
