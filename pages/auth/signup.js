import {useState} from 'react';
import Link from 'next/Link';
import {Form, Button, Container, Jumbotron, Alert} from 'react-bootstrap';
import {firebaseClient} from '../../utils/firebaseClient';

const Signup = () => {
    // const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [num, setNum] = useState(5);

    const onSubmit = async (event) => {
        event.preventDefault();
        await firebaseClient.auth().createUserWithEmailAndPassword(email, password)
            .then((data) => {
                window.location.href = '/'
            }).catch((error) => {
                setError(error);
                clearError()
            })
    }
    const clearError = () => {
        setTimeout(() => setError(null), 5000);
    }

    const onChange = (e, setVal) => {
        setVal(e.target.value)
        setError(null)
    }

    return (
        <Container>
            <Jumbotron style={{marginTop: '20px'}}>
            {error && (
            <Alert variant="danger">
                {error.message} {num}
            </Alert>
            )}
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={email} onChange={e => onChange(e, setEmail)}  type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={e => setPassword(e.target.value)}  type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group>
                <Button variant="primary" onClick={onSubmit}>
                    SignUp
                </Button>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>
                        Already have an Account ? {' '}
                        <Link href="/auth/login">
                            <a>Go to Login</a>
                        </Link>

                    </Form.Label>
                </Form.Group>
            </Form>    
            </Jumbotron>
        </Container>
    )
}

export default Signup;