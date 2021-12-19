import Layout from '../components/Layout'
import "../styles/styles.css"
import 'bulma/css/bulma.min.css';

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
