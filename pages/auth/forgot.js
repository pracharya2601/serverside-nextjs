import {useState} from 'react';
import {Form, Button, Container, Jumbotron} from 'react-bootstrap';

import Link from 'next/Link';

export default () => {
    const [email, setEmail] = useState('');

    return (
        <Container>
            <Jumbotron style={{marginTop: '20px'}}>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={email} onChange={e => setEmail(e.target.value)}  type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group>
                <Button variant="primary">
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