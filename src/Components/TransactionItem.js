import React from 'react'

const TransactionItem = ({transaction,removeTransaction}) => {
  return (
    <div className='trans-item' style={{borderRight:`5px solid ${transaction?.transtype === 'expense' ? 'red': 'green'}`}}>
        <span>{transaction.details}</span>
        <span>{transaction.amount}</span>
        <button  className="btn btn-success btn-sm" onClick={() => removeTransaction(transaction.id)}>Remove</button>
    </div>
  )
}

export default TransactionItem