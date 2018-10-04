import { GraphQLServer } from 'graphql-yoga'

// Type definitions (i.e. schema)
//   - the names of types start with uppercase letter
//   - custom types have an 'id' filed on them
const typeDefs = `
    type Query {
        greeting(name: String!): String!
        add(x: Float!, y: Float!): Float!
    }

`

// Resolvers
const resolvers = {
    Query: {
        greeting(parent, args, ctx, info) { return `Hello, ${args.name}!` },
        add(parent, args, ctx, info) { return args.x + args.y }
    }

}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => console.log('The server is up'))