import React, { useState } from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

export const Register = (props) => {

    const [email,setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    
    <div className='auth-form-container'>
    <form className='register-form' onSubmit={handleSubmit}>
    <label htmlFor='name'>Full name</label>
    <input value={name} onChange={(e) => setName(e.target.value)} type='name' name='name' id='name' placeholder='full name' required/>
    <label htmlFor="email">Email:</label>
    <input  value={email} onChange={(e) => setEmail(e.target.value)}type='email' placeholder='youremail@gmail.com' required/>
    <label htmlFor="password">Password:</label>
    <input value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder='*******' id='password' name='password' required/>
    <button>Register</button>
   </form>
   <Link className='link-btn' to={"/login"} >Already have an account? Login here</Link>
   </div>
   
  )
}
