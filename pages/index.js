import React from 'react';
import Link from 'next/Link';

import {Container} from 'react-bootstrap';
import { useUser } from '../utils/auth/useUser'

import AppBar from '../components/AppBar';

export default (props) => {
  const { user, logout } = useUser()
  // console.log(user)
  if (!user) {
    return (
      <>
      <AppBar />
      <Container>
        <p>
          You are not signed in.{' '}
          <Link href={'/auth/login'}>
            <a>Sign in</a>
          </Link>
        </p>
      </Container>
      </>
    )
  }
    return(
      <>
      <AppBar />
      <Container>
            <h1>Home Pages</h1>
            <p>You're signed in. Fullname: {user.displayName}</p>
            <p
              style={{
                display: 'inline-block',
                color: 'blue',
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
              onClick={() => logout()}
            >
              Log out
            </p>
            <Link href="/dashboard/maindashboard">
                <a>Go to Dashboard</a>
            </Link>
        </Container>
        </>
    )
}

