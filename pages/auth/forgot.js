import {useState} from 'react';
import {Form, Button, Container, Jumbotron, Alert} from 'react-bootstrap';

import { useUser } from '../../utils/auth/useUser';

import Link from 'next/Link';

export default () => {
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
            {message && (
            <Alert variant="success">
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
            </Form>    
            </Jumbotron>
        </Container>
    )
}