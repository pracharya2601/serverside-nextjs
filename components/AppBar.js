import {useRouter} from 'next/router';
import {Navbar, Nav, Button} from 'react-bootstrap';

import { getUserFromCookie } from '../utils/auth/userCookies';
import {useUser} from '../utils/auth/useUser';

const AppBar =  () => {
  const router = useRouter();
  const userFromCookie = getUserFromCookie();
  const { user, logout } = useUser()

  const authBtn = [
    {label: 'Login', href: "/auth/login"},
    {label: 'Sign Up', href: "/auth/signup"},
  ].map(({label, href}, key) => (
    <Nav.Link key={key} onClick={() => router.push(href)}>
      {label}
    </Nav.Link>
    ))
  const logutBtn = (
    <Nav.Link onClick={() => logout()}>
      <Button variant="outline-danger">Logout</Button>
    </Nav.Link>
  )

  return(
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand onClick={() => router.push('/')} style={{cursor: 'pointer'}}>
        {userFromCookie && user ? `Welcome: ${user.email}` : "NextJs"}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" />
        <Nav>
        {userFromCookie && user ? logutBtn : authBtn}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default AppBar;