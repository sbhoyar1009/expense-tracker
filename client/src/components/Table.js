import React, { useEffect, useState } from 'react';
import axios from "axios";

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
        

export default function Table() {
    const [expense, setExpense] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/expenses").then((data) => {

            let e = data.data.data

            e.map(el=>{
                el.date = el.date.split('T')[0]
            })
            e.map(el=>{
                el.amount = <span style={{color:el.amount<0?'red':'green'}}>
                    {el.amount}
                </span>
            })
            setExpense(e)
        })
    }, [])
    return (
        <>
            <h2>Expense report</h2>
            <div class="tableDiv">
            {console.log(expense)}
                <DataTable value={expense} showGridlines sortMode="multiple" >
                            <Column field="recipient" header="Name " sortable filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }}></Column>
                            <Column field="amount" header="Amount" dataType="numeric" sortable  filter filterPlaceholder="Search by name" style={{ minWidth: '12rem'}}></Column>
                            <Column field="category" header="Category" sortable filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }}></Column>
                            <Column field="date" header="Date" dataType="date" sortable filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} ></Column>
                </DataTable>
            </div>
        </>

    )
}
