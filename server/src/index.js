const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const StarwarsAPI = require('./datasources/starwars');

const server = new ApolloServer({
    typeDefs,
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
