const { RESTDataSource } = require('apollo-datasource-rest');
const {sanitize} = require("string-sanitizer");

class StarwarsAPI extends RESTDataSource {
    constructor() {
        super();
        // The URL for the REST API to envelope
        this.baseURL = 'https://swapi.dev/api/';
    }

    async getAllPeople() {
        // GET people from the API
        const response = await this.get('people');

        // Empty array to store the data
        let data = []

        // Populate the array if we got an array back
        if (Array.isArray(response.results)) {
            data = response.results.map(person => this.personReducer(person))
        }

        // Return the data
        return data
    }

    async getPeopleByPage(page_number) {
        // Sanitize the number or default to 1 if a number was not supplied
        page_number = Number.parseInt(page_number) || 1

        // GET people from the API
        const response = await this.get('people', { page: page_number });

        // Empty array to store the data
        let data = []

        // Populate the array if we got an array back
        if (Array.isArray(response.results)) {
            data = response.results.map(person => this.personReducer(person))
        }

        // Return the data
        return data
    }

    async getPersonByName({ personName }) {
        // Sanitize the person's name for security
        personName = sanitize(personName)

        // GET person using their name as a search parameter
        const response = await this.get('people', { search: personName });

        // Return the reduced data
        return this.personReducer(response.results[0]);
    }

    personReducer(person) {
        return {
            name: person.name,
            height: person.height,
            mass: person.mass,
            gender: person.gender,
            homeworld: person.homeworld,
        };
    }
}

module.exports = StarwarsAPI;
