import { GraphQLServer } from 'graphql-yoga'

// Type definitions (i.e. schema)
const typeDefs = `
    type Query {
        title: String!
        price: Float!
        releaseYear: Int
        rating: Float
        inStock: Boolean!
    }
`

// Resolvers
const resolvers = {
    Query: {
        title() { return 'Laptop' },
        price() { return 1999.99 },
        releaseYear() { return 2015 },
        rating() { return null },
        inStock() { return false }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => console.log('The server is up'))