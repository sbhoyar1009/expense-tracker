import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'

export const TransactionList = () => {
  const [expenses, setExpenses] = useState([])
  useEffect(() => {
    const token = localStorage.getItem('token')
    axios.get("http://localhost:8000/expenses",{headers : {"Authorization" : `Bearer ${token}`}}).then((data) => {

      setExpenses(data.data.data.reverse().slice(0,5))
    })
  }, [])

  const DisplayAmount = (cur,amount)=>{
    if(amount>0){
      return (cur||"INR")+". "+amount
    }
    else{
      return "- "+(cur||"INR")+". "+Math.abs(amount)
    }
  }

  return (
    <>
      <h3>Recent History</h3>
      <h6>Recent transaction will be displayed here</h6>
      <ul className="list">
        {expenses.map((expense)=>{
        return (<li className={expense.amount < 0 ? 'minus' : 'plus'}>
        {expense.recipient} <span>{DisplayAmount(expense.currency,expense.amount)}</span>
      </li>)
        })}

      </ul>
      <a href="/report">To view more...</a>
    </>
  )
}
