module.exports = {
    Query: {
        people: (_, __, { dataSources }) => dataSources.starwarsAPI.getAllPeople(),
        person: (_, { name }, { dataSources }) => dataSources.starwarsAPI.getPersonByName(name),
    }
};
