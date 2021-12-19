module.exports = {
    Query: {
        people: (_, __, { dataSources }) => dataSources.starwarsAPI.getAllPeople(),
    }
};
