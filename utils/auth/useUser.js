import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import firebase from 'firebase/app'
import 'firebase/auth'
import initFirebase from '../auth/initFirebase'
import {
  removeUserCookie,
  setUserCookie,
  getUserFromCookie,
} from './userCookies'
import { mapUserData } from './mapUserData'
import { route } from 'next/dist/next-server/server/router'

initFirebase()

const useUser = () => {
  const [user, setUser] = useState(null)

  const logout = async () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null)
      })
      .catch((e) => {
        console.error(e)
      })
  }
  const signIn = async (email, password) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setUser(response.user);
        setUserCookie(response.user);
      })
      .catch((e) => {
        console.error("Something went wrong")
      })
  }

  const signUp  = async (email, password) => {
    return firebase
      .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
          setUser(response.user);
          setUserCookie(response.user);
          return response.user
        })
        .catch((e) => {
          console.error("Email Already exist.")
        })
  }

  const sendPasswordResetEmail = async email => {
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        return true;
      })
      .catch((e) => {
        console.error(e)
      })
  }

  useEffect(() => {
    // Firebase updates the id token every hour, this
    // makes sure the react state and the cookie are
    // both kept up to date
    const cancelAuthListener = firebase.auth().onIdTokenChanged((user) => {
      if (user) {
        const userData = mapUserData(user)
        setUserCookie(userData)
        setUser(userData)
      } else {
        removeUserCookie()
        setUser()
      }
    })

    const userFromCookie = getUserFromCookie()
    // if (!userFromCookie) {
    //   router.push('/')
    //   return
    // }
    setUser(userFromCookie)

    return () => {
      cancelAuthListener()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { user, logout, signIn, signUp, sendPasswordResetEmail  }
}

export { useUser }