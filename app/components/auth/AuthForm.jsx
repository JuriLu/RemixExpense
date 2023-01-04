import { Link, useSearchParams } from '@remix-run/react';
import { FaLock, FaUserPlus } from 'react-icons/fa';

export default function AuthForm() {
  
  const [searchParams,setSearchParams] =useSearchParams() //Remix Hook
  const authMode = searchParams.get('mode') || 'login'  // in case the mode doesn't exists we set auto to login

  const submitBtnCaption = authMode === 'login' ? 'Login' : 'Create User'
  const toggleBtnCaption = authMode === 'login' ? 'Create a new user' : 'Log in with existing user'

  return (
    <form method="post" className="form" id="auth-form">
      <div className="icon-img">
        {authMode === 'login' ?  <FaLock /> : <FaUserPlus/> }
      </div>
      <p>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" required />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" minLength={7} />
      </p>
      <div className="form-actions">
        <button>{submitBtnCaption}</button>
        <Link to={authMode === 'login' ? '?mode=signup' : '?mode=login'}>{toggleBtnCaption}</Link>
      </div>
    </form>
  );
}

