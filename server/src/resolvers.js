module.exports = {
    Query: {
        people: (_, { page }, { dataSources }) => dataSources.starwarsAPI.getPeopleByPage(page),
        person: (_, { name }, { dataSources }) => dataSources.starwarsAPI.getPersonByName(name),
    }
};
