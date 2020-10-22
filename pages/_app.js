import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css';

const AppComponent = ({Component, pageProps}) => (
        <>
        <Head>
            <meta name="viewport" content="viewport-fit=cover" />
        </Head>
        <Component {...pageProps} />
        </>


)

export default AppComponent;