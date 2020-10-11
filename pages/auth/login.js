import {useState} from 'react';
import Link from 'next/Link';

import {firebaseClient} from '../../utils/firebaseClient';

export default (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault(); 
        await firebaseClient.auth().signInWithEmailAndPassword(email, password);
        window.location.href = '/';
    }

    return (
        <div className="container">
            <div className="form-group">
                <Link href="/">
                    <a>{`<<`} Back to Home</a>
                </Link>
            </div>
            <form >
                <h2>Sign In</h2>
                <div className="form-group">
                    <label>Email</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input value={password} onChange={e => setPassword(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <Link href="/auth/forgot">
                        <a>Forgot Password ?</a>
                    </Link>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" onClick={onSubmit}>Sign In</button>
                </div>
            </form>
            <Link href="/auth/signup">
                <a>Signup here</a>
            </Link>
        </div>
    )
}