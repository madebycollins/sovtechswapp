const { RESTDataSource } = require('apollo-datasource-rest');
const {sanitize} = require("string-sanitizer");

class StarwarsAPI extends RESTDataSource {
    constructor() {
        super();
        // The URL for the REST API to envelope
        this.baseURL = 'https://swapi.dev/api/';
    }

    async getAllPeople() {
        // Empty array to store the data
        let data = []

        try {
            // GET people from the API
            const response = await this.get('people');

            // Populate the array if we got an array back
            if (Array.isArray(response.results)) {
                data = response.results.map(person => this.personReducer(person))
            }
        } catch (error) {
            if (error.extensions.response.status === 404) {
                // If we hit this 404 error, we'll leave the data response blank
            }
        }

        // Return the data
        return data
    }

    async getPeopleByPage(page_number) {
        // Sanitize the number or default to 1 if a number was not supplied
        page_number = Number.parseInt(page_number) || 1

        // Make sure a page of zero has not been used
        if (page_number < 1) page_number = 1

        // Empty array to store the data
        let data = []

        try {
            // GET people from the API
            const response = await this.get('people', {page: page_number});

            // Populate the array if we got an array back
            if (Array.isArray(response.results)) {
                data = response.results.map(person => this.personReducer(person))
            }
        } catch (error) {
            if (error.extensions.response.status === 404) {
                // If we hit this 404 error, we'll leave the data response blank
            }
        }

        // Return the data
        return data
    }

    async getPeopleByPageHasNext(page_number){
        // Sanitize the number or default to 1 if a number was not supplied
        page_number = Number.parseInt(page_number) || 1

        // Make sure a page of zero has not been used
        if (page_number < 1) page_number = 1

        // Increment page count for next page check
        ++page_number

        // Call data for next page
        const next_data = await this.getPeopleByPage(page_number)

        // Check if the next set of data is empty & return outcome
        return next_data.length > 0
    }

    async getPersonByName(personName) {
        // Sanitize the person's name for security
        personName = sanitize.keepSpace(personName)

        // Empty array to store the data
        let data = []

        try {
            // GET person using their name as a search parameter
            const response = await this.get('people', {search: personName});

            // Populate the array if we got an array back
            if (Array.isArray(response.results)) {
                data = response.results.map(person => this.personReducer(person))
            }
        } catch (error) {
            if (error.extensions.response.status === 404) {
                // If we hit this 404 error, we'll leave the data response blank
            }
        }

        // Return the data
        return data
    }

    async personReducer(person) {

        // Get data about the world
        const world_data = await this.get(person.homeworld)

        return {
            name: person.name,
            height: person.height,
            mass: person.mass,
            gender: person.gender,
            homeworld: world_data.name,
        };
    }
}

module.exports = StarwarsAPI;
