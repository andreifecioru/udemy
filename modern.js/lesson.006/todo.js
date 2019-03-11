const todos = [
  { text: "eat", completed: false },
  { text: "play", completed: false },
  { text: "work", completed: false },
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

deleteTodo(todos, "watch TV");
deleteTodo(todos, "eat something");
console.log(todos);
