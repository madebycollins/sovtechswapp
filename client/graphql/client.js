import {
    ApolloClient, ApolloLink, HttpLink,
    InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
        );
    if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = new HttpLink({ uri: 'https://xuk2u.sse.codesandbox.io/' })

const link = ApolloLink.from([
    errorLink,
    httpLink,
]);

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link
});

module.exports = client
