import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'; //global css

import {AuthProvider} from '../authContext'

//header
import Navbar from '../components/Navbar';

const AppComponent = ({Component, pageProps}) => (
    <AuthProvider>
        <>
        <Head>
            <meta name="viewport" content="viewport-fit=cover" />
        </Head>
        <Navbar />
        <Component {...pageProps} />
        </>
    </AuthProvider>

)

export default AppComponent;