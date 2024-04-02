import axios from 'axios';
import React, {  useEffect, useState } from 'react';


export const Balance = () => {

  const [balance,setBalance] = useState(0.00)

  useEffect(()=>{
    axios.get("http://localhost:8000/expenses").then((data)=>{
      let expense = data.data.data.map(ex=>ex.amount);
      let initialValue = 0
      setBalance(expense.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
      ))
    })
  },[])

  return (
    <div style={{textAlign:"center"}}>
      <h4>Your Balance</h4>
    <h1 >Rs.{balance}</h1>
    </div>
  )
}
