import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';

export const IncomeExpenses = () => {
  const [income, setIncome] = useState([])
  const [expenses,setExpense] = useState([])
  useEffect(() => {
      axios.get("http://localhost:8000/expenses").then((data) => { 
        let totalTrans = data.data.data.map(am=>am.amount)

        for(let trans of totalTrans){
          console.log("Executed")
          if(trans>0){
            income.push(trans)

          }else{
            expenses.push((-1)*trans)

          }
        }
  })
  }, [])


  return (
    <div className="inc-exp-container">
      {income.length>0&&expenses.length>0?
<>
        <div>
          <h4>Income</h4>
  <p className="money plus">Rs. {income.reduce((a, b) => a + b, 0)}</p>
        </div>
        <div>
          <h4>Expense</h4>
  <p className="money minus">Rs. {expenses.reduce((a, b) => a + b, 0)}</p>
        </div>
        </>
         : 
         <></>}

      </div>
  )
}
