const team = ["Andrei", "John"]

const message = (team.length > 4) ?
  "Too many people on your team" :
  `Team size: ${team.length}`

console.log(message)