import {useState} from 'react';

export default () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = event => {
        event.preventDefault();
        //setup backend
        console.log(email, password);
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>Sign In</h2>
            <div className="form-group">
                <label>Email</label>
                <input value={email} onChange={e => setEmail(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input value={password} onChange={e => setPassword(e.target.value)} className="form-control" />
            </div>
            <button className="btn btn-primary">Sign In</button>
        </form>
    )
}