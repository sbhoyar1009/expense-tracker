import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Table from './components/Table';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import { AddTransaction } from './components/AddTransaction';

function App() {
  return(
    <BrowserRouter>
    <Routes>
    <Route path="/signup" element={<Signup />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/add-transaction" element={<AddTransaction />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/report" element={<Table />}></Route>
      </Routes>
      </BrowserRouter>
    
      )
}

export default App;
