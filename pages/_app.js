import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'; //global css
import {AuthProvider} from '../authContext'

//header
import AppBar from '../components/AppBar';

const AppComponent = ({Component, pageProps}) => (
    <AuthProvider>
        <>
        <Head>
            <meta name="viewport" content="viewport-fit=cover" />
        </Head>
        <AppBar />
        <Component {...pageProps} />
        </>
    </AuthProvider>

)

export default AppComponent;