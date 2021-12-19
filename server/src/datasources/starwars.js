const { RESTDataSource } = require('apollo-datasource-rest');

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
        if (Array.isArray(response)) {
            data = response.map(person => this.personReducer(person))
        }

        // Return the data
        return data
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
