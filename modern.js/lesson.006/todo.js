const todos = ['eat', 'sleep', 'play', 'work', 'watch tv']

// Delete 3rd item
todos.splice(2, 1)

// Add a new item @ the end
todos.push('go outside')

// Remove 1st item
todos.shift()

todos.forEach(function(item, idx) { 
    console.log(`${idx + 1}. ${item}`)
})

for (let i = 0; i < todos.length; i++) {
    console.log(`${i + 1}. ${todos[i]}`)
}