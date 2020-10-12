import {useState} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/Link';
import {firebaseClient} from '../../utils/firebaseClient';

import {Form, Button, Container, Jumbotron} from 'react-bootstrap';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();
    console.log(router)

    const onSubmit = async (event) => {
        event.preventDefault(); 
        await firebaseClient.auth().signInWithEmailAndPassword(email, password);
        window.location.href = '/';
    }

    return (
        <Container>
            <Jumbotron style={{marginTop: '20px'}}>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={email} onChange={e => setEmail(e.target.value)}  type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={e => setPassword(e.target.value)}  type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>
                        Forgot Password ? {' '}
                        <Link href="/auth/forgot">
                            <a>Reset Password</a>
                        </Link>

                    </Form.Label>
                </Form.Group>
                <Form.Group>
                <Button variant="primary" onClick={onSubmit}>
                    Login
                </Button>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>
                        Don't have an Account ? {' '}
                        <Link href="/auth/signup">
                            <a>Create One</a>
                        </Link>

                    </Form.Label>
                </Form.Group>
            </Form>    
            </Jumbotron>
        </Container>
    )
}

export default Login;