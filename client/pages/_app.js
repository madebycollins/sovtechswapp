import Layout from '../components/Layout'
import "../styles/styles.css"
import 'bulma/css/bulma.min.css';
import client from "../graphql/client"

import { ApolloProvider } from "@apollo/client";

export default function MyApp({ Component, pageProps }) {
    return (
        <ApolloProvider client={client}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ApolloProvider>
    )
}
