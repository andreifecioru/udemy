// Named export - as many as needed
const message = 'Some message from mymodule.js'
const name = 'Andrei'

// Default export - no name, but you can only have one
const location = 'Bucharest'

const getGreeting = (name) => {
    return `Welcome ${name}`
}

export {
    message,
    name,
    getGreeting,
    location as default
}