import {useState} from 'react';
import Link from 'next/Link';

import { useUser } from '../../utils/auth/useUser';
import { getUserFromCookie } from '../../utils/auth/userCookies'

import {Form, Button, Container, Jumbotron, Alert} from 'react-bootstrap';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null)

    const {signIn} = useUser();

    const onSubmit = async (event) => {
        event.preventDefault(); 
        await signIn(email, password);
        const userFromCookie = getUserFromCookie();
        if(userFromCookie) {
          window.location.href = '/'
        } else {
          setError({message: "Emaill or Password is incorrect"})
        }

    }

    return (
        <Container>
            <Jumbotron style={{marginTop: '20px'}}>
            {error && (
            <Alert variant="danger">
              {error.message}
            </Alert>
            )}
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