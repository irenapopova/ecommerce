const { GraphQLServer } = require('graphql-yoga');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const db = require('./db');

// Create the GraphQL Yoga Server

function createServer() {
    return new GraphQLServer({
        typeDefs: 'src/schema.graphql',
        resolver: {
            Mutation,
            Query
        },
        resolverValidationOptions: {
            requireResolversForResolveType
        }
        context: req => ({ ...req, db })
    });

}

module.export = createServer;