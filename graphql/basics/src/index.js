import { GraphQLServer } from 'graphql-yoga'

// Type definitions (i.e. schema)
//   - the names of types start with uppercase letter
//   - custom types have an 'id' filed on them
const typeDefs = `
    type Query {
        me: User!
        post: Post!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
    }

    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
    }
`

// Resolvers
const resolvers = {
    Query: {
        me() {
            return {
                id: '0001',
                name: 'Andrei',
                email: 'andrei@example.com',
                age: null
            }
        },

        post() {
            return {
                id: '0002',
                title: "Example post",
                body: "Example post body",
                published: false
            }
        }

    }

}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => console.log('The server is up'))