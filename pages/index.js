import React, {useEffect, useCallback} from 'react';
import Link from 'next/Link';
import {useAuth} from '../authContext';

import {Container} from 'react-bootstrap';

export default (props) => {
    const {data} = props;
    const {user} = useAuth();
    console.log('main index-page', user)
    return(
      <Container>
            <h1>Home Pages</h1>
            {user && (
              <>
                <h2>{user.email}</h2>
                <h2>{user.uid}</h2>
              </>
            ) }
            {!user && (
            <div>
                {data.map((item, key) => (
                <ul key={key}>
                    <li>{item.name}</li>
                    <li>{item.type}</li>
                    <li>{item.sweet ? "Sweet" : "Not Sweet"}</li>
                </ul>
                ))}
            </div>
            )}
            <Link href="/dashboard/maindashboard">
                <a>Go to Dashboard</a>
            </Link>
        </Container>

    )
}

export const getStaticProps = async context => {
    return {
      props: {
        data: [
          {
            name: "apple",
            type: "fruit",
            sweet: true,
          },
          {
            name: "banana",
            type: "berry",
            sweet: true,
          },
          {
            name: "Tomato",
            type: "berry",
            sweet: false,
          },
          {
            name: "Watermelon",
            type: "fruit",
            sweet: true,
          },
        ]
      }
    }
  }