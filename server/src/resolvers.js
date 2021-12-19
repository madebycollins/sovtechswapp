module.exports = {
    Query: {
        people: (_, { page }, { dataSources }) => dataSources.starwarsAPI.getPeopleByPage(page),
        person: (_, { name }, { dataSources }) => dataSources.starwarsAPI.getPersonByName(name),
        people_has_next: (_, { page }, { dataSources }) => dataSources.starwarsAPI.getPeopleByPageHasNext(page),
    }
};
