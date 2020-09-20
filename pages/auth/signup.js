import {useState} from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use_request';

export default () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //call onRequest function
    const {sendRequest, errors} = useRequest({
        url: '/api/signup', //api url request endpoint
        method: 'post',
        body: {
            email, password
        },
        onSuccess: () => Router.push('/')
    })

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(email, password); //remove 
        sendRequest();
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>Signup Page</h2>
            <div className="form-group">
                <label>Full Name</label>
                <input value={fullname} onChange={e=> setFullname(e.target.value)} className="form-control"/>
            </div>
            <div className="form-group">
                <label>Email</label>
                <input value={email} onChange={e => setEmail(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input value={password} onChange={e => setPassword(e.target.value)} className="form-control" />
            </div>
            {errors}
            <button className="btn btn-primary">Create Acount</button>
        </form>
    )
}