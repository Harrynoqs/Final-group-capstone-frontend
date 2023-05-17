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
      <div className="h-full w-full p-5 md:px-20 bg-cover  bg-no-repeat bg-[url('./images/bgreflect.png')] bg-gray-600 bg-blend-multiply rounded-md">
        <h1 className="p-4 text-xl font-extrabold text-center text-white md:text-2xl">Login || SignUp</h1>
        <form onSubmit={handleLogin}>
          <div className="flex justify-center p-4 login-logo">
            <span className="flex items-center justify-center p-2 bg-white border-none rounded-full w-42 h-42 ">
              <img src="./images/main.png" alt="logo" width="140" height="140" />
            </span>
          </div>
          <div className="mb-6">
            <input onChange={(e) => setUserName(e.target.value)} type="text" name="username" value={username} id="username" placeholder="Username:" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
          </div>
          <div className="mb-6">
            <input onChange={(e) => setUserName(e.target.value)} type="password" name="password" value={username} id="username" placeholder="Password:" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
          </div>
          <div className="flex justify-between mb-6">
            <input className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit" value="Login" />
            <div className="flex gap-3 text-white">
              <p className="text-white">Don&apos;t have account?</p>
              <a onClick={handleRegister} href="/signup" alt="create new account" className="text-white">Sign Up</a>
              <p id="message" className="text-white">{notice}</p>
            </div>
          </div>

        </form>
      </div>
    </>
  );
};

export default Login;
