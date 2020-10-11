import Link from 'next/link';
import {useAuth} from '../authContext';
import {firebaseClient} from '../utils/firebaseClient';

export default () => {

  const {user} = useAuth();

  const onClick = async () => {
    await firebaseClient.auth().signOut();
  }

  const authBtn = [
    {label: 'Sign Up', href: "/auth/signup"},
    {label: 'Sign In', href: "/auth/login"},
  ].map(({label, href}, key) => (
      <li key={key} className="nav-item">
        <Link href={href}>
          <a className="nav-link">{label}</a>
        </Link>
      </li>
    ))
  const logutBtn = (
    <li className="nav-item" onClick={onClick}>
      <button className="btn btn-sm btn-outline-danger my-2 my-sm-0" type="submit">Logout</button>
    </li>
  )

  return(
    <nav className="navbar navbar-light bg-light">
      <Link href="/">
        <a className="navbar-brand">Home</a>
      </Link>
      <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items-center">
          {!user ? authBtn : logutBtn}
        </ul>
      </div>
    </nav>
  )
}