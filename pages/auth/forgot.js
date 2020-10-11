import {useState} from 'react';
import axios from 'axios';

import Link from 'next/Link';

export default () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState('');

    const onSubmit =  async  event => {
        event.preventDefault();
        const body = {
            email,
            password
        }
        try {
            const res = await axios.post('/api/login', body);
            console.log(res.data);
            setResponse(res.data);
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <div className="container">
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
            


            {response && (
                <div>
                    <h1>{response.email}</h1>
                    <h1>{response.token}</h1>
                </div>
            )}
        </form>
        <Link href="/auth/signup">
            <a>Signup here</a>
        </Link>
        </div>
    )
}