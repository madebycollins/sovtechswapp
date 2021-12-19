const { RESTDataSource } = require('apollo-datasource-rest');

class StarwarsAPI extends RESTDataSource {
    constructor() {
        super();
        // The URL for the REST API to envelope
        this.baseURL = 'https://swapi.dev/api/';
    }
}

module.exports = StarwarsAPI;
