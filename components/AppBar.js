import {useRouter} from 'next/router';
import {useAuth} from '../authContext';
import {firebaseClient} from '../utils/firebaseClient';


import {Navbar, Nav, Button} from 'react-bootstrap';

const AppBar =  () => {

  const {user} = useAuth();
  const router = useRouter();

  const onClick = async () => {
    await firebaseClient.auth().signOut();
  }

  const authBtn = [
    {label: 'Login', href: "/auth/login"},
    {label: 'Sign Up', href: "/auth/signup"},
  ].map(({label, href}, key) => (
    <Nav.Link key={key} onClick={() => router.push(href)}>
      {label}
    </Nav.Link>
    ))
  const logutBtn = (
    <Nav.Link  onClick={onClick}>
      <Button variant="outline-danger">Logout</Button>
    </Nav.Link>
  )

  return(
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand onClick={() => router.push('/')} style={{cursor: 'pointer'}}>
        {user ? `Welcome: ${user.email}` : "NextJs"}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" />
        <Nav>
        {user ? logutBtn : authBtn}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default AppBar;