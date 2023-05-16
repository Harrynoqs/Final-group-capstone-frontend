import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser, registerUser } from '../redux/users/users';

const Login = () => {
  const [notice, setNotice] = useState('');
  const [username, setUserName] = useState('');

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(loginUser(username));
    setNotice(`Logged in as: ${username}`);
    setTimeout(() => {
      window.location.href = '/';
    }, 300);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerUser);
    setNotice(`Successfully registered as: ${username}`);
    setTimeout(() => {
      window.location.href = '/';
    }, 300);
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <div className="login-logo">
          {/* <img src="/" alt="logo" width="80" height="80" /> */}
        </div>
        <input onChange={(e) => setUserName(e.target.value)} type="username" name="username" value={username} id="username" placeholder="Username:" required />
        <input className="login" type="submit" value="Login" />
      </form>
      <p>Don&apos;t have account?</p>
      <a onClick={handleRegister} href="/signup" alt="create new account">Sign up</a>
      <p id="message">{notice}</p>
    </>
  );
};

export default Login;
