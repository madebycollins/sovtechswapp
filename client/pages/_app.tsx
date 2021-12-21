import Layout from '../components/Layout'
import "../styles/styles.css"
import "../styles/loader.css"
import 'bulma/css/bulma.min.css';
import client from "../graphql/client"
import type { AppProps } from 'next/app'

import { ApolloProvider } from "@apollo/client";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={client}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ApolloProvider>
    )
}
