import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../redux/users/users';

const Login = () => {
  const [username, setUserName] = useState('');

  const dispatch = useDispatch();
  const error = useSelector((state) => state?.user.status);

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(loginUser(username));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerUser(username));
  };

  return (
    <div className="form-container-login">
      <form onSubmit={handleLogin}>
        <div className="login-logo">
        <img src="https://res.cloudinary.com/denphvygd/image/upload/v1684353954/black1_p0m98i.png" alt="SEH bikes" className="mb-9" />
        </div>
        <input onChange={(e) => setUserName(e.target.value)} type="username" name="username" value={username} id="username" placeholder="Username:" required />
        <input className="login-btn" type="submit" value="Login" />
      </form>
      <p className="font-light pt-2">Don&apos;t have account?</p>
      <a onClick={handleRegister} href="/signup" alt="create new account" className="font-bold sign-up">Sign up</a>
      <p id="message"> {error && <p>{error}</p>}</p>
    </div>
  );
};

export default Login;
