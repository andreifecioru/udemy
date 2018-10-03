import { GraphQLServer } from 'graphql-yoga'

// Type definitions (i.e. schema)
const typeDefs = `
    type Query {
        hello: String!
        name: String!
        location: String!
        bio: String
    }
`

// Resolvers
const resolvers = {
    Query: {
        hello() {
            return 'This is my 1st query'
        },

        name() {
            return 'Andrei'
        },

        location() {
            return 'Bucharest'
        },

        bio() {
            return 'Just me...'
        }

    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => console.log('The server is up'))