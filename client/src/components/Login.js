import React, { useState } from 'react';
import bcrypt from "bcryptjs";
import '../App.css';
import axios from "axios"

export default function Login() {

    const onSubmit=(e)=>{
      e.preventDefault()
      axios.post("http://localhost:8000/users/verify",{
        username : text,
        password : password
      })
    }
    const [text, setText] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [date,setDate] = useState()

  

    return (
        <>
            <div className="container">
            <h3>Login Page</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Username</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter username" />
        </div>
        <div className="form-control">
          <label htmlFor="text">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
        </div>
        <br />
            <button className="btn"  style={{ backgroundColor: "#2ecc71","display": "inline-block" }}>Login</button>

      </form>
            </div>
            <div className='container'>
                <p>Don't have an account? <a href='/signup'>Signup</a></p>
            </div>

        </>
    )
}
