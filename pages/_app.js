import 'bootstrap/dist/css/bootstrap.css'; //global css

import {AuthProvider} from '../authContext'

const AppComponent = ({Component, pageProps}) => (
    <AuthProvider>
        <Component {...pageProps} />
    </AuthProvider>

)

export default AppComponent;