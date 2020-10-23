import {useEffect} from 'react';
import { getUserFromCookie } from '../utils/auth/userCookies';

export const authRouteWrapper = BaseComponent =>  props => {
  useEffect(() => {
    const userFromCookie = getUserFromCookie();
    if (userFromCookie) {
      window.location.href = '/'
      return
    }
  }, [])

  return(
    <BaseComponent {...props} />
  )
}
