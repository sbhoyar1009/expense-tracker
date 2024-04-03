import React from 'react';
import { Header } from './Header';
import { Balance } from './Balance';
import { IncomeExpenses } from './IncomeExpenses';
import { TransactionList } from './TransactionList';
import { AddTransaction } from './AddTransaction';
import '../App.css';




export default function Home() {
  return (

<>

          <Header />
          <div className="container">
            <Balance />
            {/* <IncomeExpenses /> */}
            <TransactionList />
            {/* <AddTransaction /> */}

          <div class="action_btn">
          <a href='/add-transaction'>  <button className="btn">Add Transaction</button></a>
          </div>
          </div>

</>
  )
}
