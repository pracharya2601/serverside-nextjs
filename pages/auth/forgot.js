import {useState} from 'react';
import Link from 'next/Link';

import { useUser } from '../../utils/auth/useUser';
import {authRouteWrapper} from '../../components/authRouteWrapper';

import {Form, Button, Container, Jumbotron, Alert} from 'react-bootstrap';

const Forgot = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(null);
    const {sendPasswordResetEmail} = useUser();

    const onSubmit = async (event) => {
        event.preventDefault(); 
        await sendPasswordResetEmail(email);
        setMessage("Please Check Your Email for Password Reset Link")
        setTimeout(() => {window.location.href = '/auth/login';}, 3000)
    }

    return (
        <Container>
            <Jumbotron style={{marginTop: '20px'}}>
            <h2>Reset Password</h2>
            {message && (
            <Alert variant="success" variant="success" onClose={() => setMessage(null)} dismissible>
              {message}
            </Alert>
            )}
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={email} onChange={e => setEmail(e.target.value)}  type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group>
                <Button variant="primary" onClick={onSubmit}>
                    Get Reset Password Link
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
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>
                        Go back to {' '}
                        <Link href="/auth/login">
                            <a>Login</a>
                        </Link>

                    </Form.Label>
                </Form.Group>
            </Form>    
            </Jumbotron>
        </Container>
    )
}

export default authRouteWrapper(Forgot);