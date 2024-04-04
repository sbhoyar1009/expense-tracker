import React, { useState, useContext } from 'react'
import axios from 'axios';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState()
  let [credit, setCredit] = useState(true);
  const [currency, setCurrency] = useState('INR')
  const categories = ["Food", "Investment", "Groceries", "Study Material", "Clothes", "Travelling", "Subscriptions", "Others and miscellous"]
  const currencies = ["INR", "USD","EUR"]

  const onSubmit = e => {
    e.preventDefault();
    let data = {}
    if (credit === false) {

      data = {
        "category": category,
        "recipient": text,
        "amount": parseInt(amount) * -1,
        "date": date,
        "currency" : currency

      }
    } else {
      data = {
        "category": category,
        "recipient": text,
        "amount": parseInt(amount),
        "date": date,
        "currency" : currency
      }
    }
    axios.post("http://localhost:8000/expenses", { data })
    window.location.reload()
  }


  return (
    <div className='container'>

      <a href='/home'>   <h3>Go to home</h3> </a>
      <h3> Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Descripe the expense" />
        </div>
        <div className="form-control">
          <label htmlFor="text">Category</label>
          <select onChange={(e) => setCategory(e.target.value)}>
            {categories.map((cat) => {
              return (<option value={cat}>{cat}</option>)
            })}
          </select>
        </div>
  
        <div className="form-control amount">
          <label htmlFor="amount"
          >Amount <br />
            {/* (negative - expense, positive - income) */}
          </label>
          <br />
          <div style={{ "display": "inline-block" }}>
            <select onChange={(e)=>    setCurrency(e.target.value)}>
              {currencies.map((cat) => {
                return (<option value={cat}>{cat}</option>)
              })}
            </select>
          </div>
          < div style={{ "display": "inline-block", "margin": "0.5rem", "width": "18.26rem" }}>
            <input type="number" value={amount} onChange={e=>setAmount(e.target.value)} placeholder="Enter amount..." />
          </div>
        </div>
        <div className="form-control">

<label htmlFor="date"> Add reciepts if you want
</label>
<input type="file"  />
</div>
        <br />
        <div className="form-control">

          <label htmlFor="date">Date <br />
          </label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Enter date..." />
        </div>
  
        <div class="buttons">

          <div class="action_btn">
            <button className="btn" onClick={() => { setCredit(true) }} style={{ backgroundColor: "#2ecc71" }}>Credit</button>
            <button className="btn" onClick={() => { setCredit(false) }} style={{ backgroundColor: "#c0392b" }}>Debit</button>
          </div>
        </div>
      </form>
    </div>
  )
}
