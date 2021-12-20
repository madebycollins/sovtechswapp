import { gql } from "@apollo/client";

const GET_PEOPLE = gql`
    query People($page: Int) {
        people(page: $page) {
            name
            height
            mass
            gender
            homeworld
        }
        people_has_next(page: $page)
    }
`;

const GET_PERSON = gql`
    query GetPerson($name: String!) {
        person(name: $name) {
            name
            height
            mass
            gender
            homeworld
        }
    }
`

module.exports = { GET_PERSON, GET_PEOPLE}
