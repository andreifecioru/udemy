const todos = [
  { text: "eat", completed: false },
  { text: "play", completed: false },
  { text: "work", completed: true },
  { text: "watch tv", completed: false }
];

const deleteTodo = function(todos, text) {
  const idx = todos.findIndex(function(todo) {
    return todo.text.toLowerCase() === text.toLowerCase();
  });

  if (idx >= 0) {
    todos.splice(idx, 1);
  }
};

// deleteTodo(todos, "watch TV");
deleteTodo(todos, "eat something");
console.log(todos);

console.log("\n----------------------\n");

const getThingsToDo = function(todos) {
  return todos.filter(function(todo, idx) {
    return !todo.completed;
  });
};

console.log(getThingsToDo(todos));

console.log("\n----------------------\n");
const sortTodos = function(todos) {
  todos.sort(function(todo, otherTodo) {
    return todo.completed - otherTodo.completed;
  });
};

sortTodos(todos);
console.log(todos);
