import {
    ApolloClient,
    InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://xuk2u.sse.codesandbox.io/',
    cache: new InMemoryCache()
});

module.exports = client
