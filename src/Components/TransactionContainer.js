import React, { useEffect, useState } from 'react'
import TransactionItem from './TransactionItem'

const TransactionContainer = ({transactions, removeTransaction}) => {
    const[searchinput, setSearchInput]=useState("")
    const[filteredtransactions, setFilteredTransactions] =useState(transactions)

    const filteredData=(searchinput)=>{
        if (!searchinput || !searchinput.trim().length){
            setFilteredTransactions(transactions);
            return;
        }
        let filtered=[...filteredtransactions];
        filtered= filtered.filter((item)=> item.details.toLowerCase().includes(searchinput.toLowerCase().trim()));
        setFilteredTransactions(filtered);
    }

    useEffect(()=>{
        filteredData(searchinput)
    }, [transactions,searchinput])

  return (
    <div className='container'>
        <h1 className='h2 mb-4'>Transactions</h1>
        <input type='text' className='form-control mb-4 p-3' placeholder='Search here' value={searchinput} onChange={(e)=> setSearchInput(e.target.value)} />
        <div>
        {filteredtransactions?.length ? (
          filteredtransactions.map((transaction) => (
            <TransactionItem
              transaction={transaction}
              key={transaction.id}
              removeTransaction={removeTransaction}
            />
          ))
        ) : (
          <p>No Transactions</p>
        )}
      </div>
    </div>
  )
}

export default TransactionContainer