import {useState} from 'react';
import Link from 'next/Link';

import {firebaseClient} from '../../utils/firebaseClient';

export default () => {
    // const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit =async (event) => {
        event.preventDefault();
        await firebaseClient.auth().createUserWithEmailAndPassword(email, password);
        window.location.href = '/auth/login'
    }

    return (
        <div className="container">
            <div className="form-group">
                <Link href="/">
                    <a>{`<`}Back to Home</a>
                </Link>
                {' '}
                <Link href="/auth/login">
                    <a>{`<`}Back to login</a>
                </Link>
            </div>
        <form onSubmit={onSubmit}>
            <h2>Signup Page</h2>
            {/* <div className="form-group">
                <label>Full Name</label>
                <input value={fullname} onChange={e=> setFullname(e.target.value)} className="form-control"/>
            </div> */}
            <div className="form-group">
                <label>Email</label>
                <input value={email} onChange={e => setEmail(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input value={password} onChange={e => setPassword(e.target.value)} className="form-control" />
            </div>
            <button className="btn btn-primary" onClick={onSubmit}>Create Acount</button>
        </form>
        </div>
    )
}