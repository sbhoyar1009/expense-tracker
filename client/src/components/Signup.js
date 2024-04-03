import React, { useState } from 'react';
import axios from "axios"
import '../App.css';
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";

export default function Signup() {

  let navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onSubmit=(e)=>{
      e.preventDefault()
      axios.post("http://localhost:8000/users",{
        email : email,
        username : username,
        password : bcrypt.hashSync(password)

      }).then(res=>{
        navigate("/login")
      })

    }

    return (
        <>
            <div className="container">
            <h3>Signup</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" />
        </div>
        <div className="form-control">
          <label htmlFor="text">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email ID" />
        </div>
        <div className="form-control">
          <label htmlFor="text">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword((e.target.value))} placeholder="Enter password" />
        </div>
        <br />
            <button className="btn"  style={{ backgroundColor: "#2ecc71","display": "inline-block" }}>Sign Up</button>

      </form>
            </div>
            <div className='container'>
                <p>Already have an account? <a href='/login'>Login</a></p>
            </div>
        </>
    )
}
