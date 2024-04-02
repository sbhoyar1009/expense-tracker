import React, { useState } from 'react';

import '../App.css';

export default function Signup() {

    const onSubmit=()=>{}
    const [text, setText] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [date,setDate] = useState()

  

    return (
        <>
            <div className="container">
            <h3>Signup</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Username</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter username" />
        </div>
        <div className="form-control">
          <label htmlFor="text">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email ID" />
        </div>
        <div className="form-control">
          <label htmlFor="text">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
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
