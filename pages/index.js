import React from 'react';
import Link from 'next/Link';

import {Container} from 'react-bootstrap';
import { useUser } from '../utils/auth/useUser'

export default (props) => {
  const { user, logout } = useUser()
  // console.log(user)
  if (!user) {
    return (
      <Container>
        <p>
          You are not signed in.{' '}
          <Link href={'/authentication'}>
            <a>Sign in</a>
          </Link>
        </p>
      </Container>
    )
  }
    return(
      <Container>
            <h1>Home Pages</h1>
            <p>You're signed in. Email: {user.email}</p>
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
            <Link href="/auth/login">
              <a>SignIn</a>
            </Link>
        </Container>

    )
}
