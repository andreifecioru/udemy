const todos = loadTodos();

const filters = {
  searchText: "",
  hideCompleted: false
};

// initial rendering of the todo list
renderTodos(todos, filters);


// event-handler for filtering todos
document.querySelector("#search-box").addEventListener("input", e => {
  // update the filter value
  filters.searchText = e.target.value;
  // re-render the todo list
  renderTodos(todos, filters);
});

// event-handler for adding a new todo (via the form)
document.querySelector("#todo-form").addEventListener("submit", e => {
  // intercept the "submit" event
  e.preventDefault();

  // extract the data from the form
  const todoText = e.target.elements.newTodo.value;
  e.target.elements.newTodo.value = "";

  if (todoText != "") {
    // update the todo list
    todos.push({
      id: uuidv4(),
      text: todoText,
      completed: false
    });

    // save the data in local storage
    saveTodos(todos)

    // re-render the todo list
    renderTodos(todos, filters);
  }
});

// event-handler for the "hide-completed" checkbox
document.querySelector("#hide-completed").addEventListener("change", e => {
  // extract the checkbox state and update the filter
  filters.hideCompleted = e.target.checked;

  // re-render the todo list
  renderTodos(todos, filters);
});

