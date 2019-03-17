const loadTodos = () => {
  const todosJSON = localStorage.getItem("todos");
  return todosJSON === null ? [] : JSON.parse(todosJSON);
};

const saveTodos = todos => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const removeTodo = id => {
  const idx = todos.findIndex(todo => todo.id === id);
  if (idx >= 0) {
    todos.splice(idx, 1);
  }
};

const updateCompleteStatus = (id, status) => {
  const todo = todos.find(todo => todo.id === id);
  if (todo !== undefined) {
    todo.completed = status;
  }
};

const generateTodoDOM = (todo, idx) => {
  const $todo = document.createElement("div");

  const $checkbox = document.createElement("input");
  $checkbox.setAttribute("type", "checkbox");
  $checkbox.checked = todo.completed;
  $checkbox.addEventListener("change", e => {
    updateCompleteStatus(todo.id, e.target.checked);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  const $button = document.createElement("button");
  $button.textContent = "x";
  $button.addEventListener("click", () => {
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  const $span = document.createElement("span");
  const todoText = `${idx + 1}. ${todo.text} (${
    todo.completed ? "completed" : "in progress"
  })`;
  $span.textContent = todoText;

  $todo.appendChild($checkbox);
  $todo.appendChild($span);
  $todo.appendChild($button);

  return $todo;
};

const generateSummaryDOM = todos => {
  // find the incomplete todos
  const incompleteTodos = todos.filter(todo => !todo.completed);

  const $summary = document.createElement("h3");
  $summary.textContent = `You have ${
    incompleteTodos.length
  } TODOs left in progress.`;

  return $summary;
};

const renderTodos = (todos, filters) => {
  const $todoArea = document.querySelector("#todo-area");

  // remove all existing todos
  $todoArea.innerHTML = "";

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

  // add the new todos
  filteredTodos.forEach((todo, idx) => {
    $todoArea.appendChild(generateTodoDOM(todo, idx));
  });

  // add the summary section
  $todoArea.appendChild(generateSummaryDOM(todos));

  // update the "hide-completed" checkbox
  document.querySelector("#hide-completed").checked = filters.hideCompleted;
};
