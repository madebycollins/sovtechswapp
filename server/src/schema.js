const {gql} = require('apollo-server');

const typeDefs = gql`
    type Person {
        "The name of the person"
        name: String
        "The height of the person"
        height: String
        "The mass of the person"
        mass: String
        "The gender of the person"
        gender: String
        "The homeworld of the person"
        homeworld: String
    }

    type Query {
        "Returns a list of people"
        people(page: Int): [Person]!
        "Returns data for a single person"
        person(name: String!): [Person]
    }
`;

module.exports = typeDefs;
