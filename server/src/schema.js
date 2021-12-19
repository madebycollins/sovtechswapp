const {gql} = require('apollo-server');

const typeDefs = gql`
    type Person {
        name: String
        height: String
        mass: String
        gender: String
        homeworld: String
    }

    type Query {
        people: [Person]!
    }
`;

module.exports = typeDefs;
