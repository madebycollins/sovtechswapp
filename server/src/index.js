const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const StarwarsAPI = require('./datasources/starwars');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        starwarsAPI: new StarwarsAPI(),
    })
});

server.listen().then(() => {
    console.log(`
    Server is running!
    Listening on port 4000
    Explore at https://studio.apollographql.com/sandbox
  `);
});
