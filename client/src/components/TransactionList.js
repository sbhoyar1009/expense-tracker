import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'

export const TransactionList = () => {
  const [expense, setExpense] = useState({})
  useEffect(() => {
    axios.get("http://localhost:8000/expenses").then((data) => {
      setExpense(data.data.data.reverse()[0])
    })
  }, [])

  return (
    <>
      <h3>History</h3>
      <h6>Recent transaction will be displayed here</h6>
      <ul className="list">
        <li className={expense.amount < 0 ? 'minus' : 'plus'}>
          {expense.recipient} <span>Rs.{expense.amount}</span>
        </li>
      </ul>
      <a href="/report">To view more...</a>
    </>
  )
}
