import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const navigate = useNavigate()
  const handleLogin = async (email, password) => {
    try {
      const response = await fetch('https://65814d0a3dfdd1b11c42e66c.mockapi.io/Users');
      const users = await response.json();
      console.log('Mock API Users:', users);

      const user = users.find((u) => u.email === email && u.password === password);
      console.log(users);

      if (user) {
        console.log('Login successful:', user);
        props.setIsLoginPage(false)
        props.setIsLogged(true)
        navigate("/src/Components/UserPage.jsx")
      } else {
        console.log('Invalid info');
      }
    } catch (error) {
      console.log('Error during login', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <>
      <div className='auth-form-container'>
        <form className='login-form' onSubmit={handleSubmit}>
          <label htmlFor='email'>Email:</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='youremail@gmail.com' />
          <label htmlFor='password'>Password:</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='***********' id='password' name='password' />
          <button type='submit'>Login</button>
        </form>
        <Link className='link-btn' to={"/register"}>
          Don't have an account? Register here.
        </Link>
      </div>
    </>
  );
};
