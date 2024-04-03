import axios from 'axios';
import React, {  useEffect, useState } from 'react';


export const Balance = () => {

  const [balance,setBalance] = useState(0.00)

  useEffect(()=>{

    // const converter = await axios.get("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json").then((res)=>{
    //   return res.data.inr
    // })

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
    <h1 >Rs. {balance.toLocaleString()}</h1>
    </div>
  )
}
