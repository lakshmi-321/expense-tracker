import React, { useState } from 'react'

const AddTransaction = ({ setToggle, AddTransactions,calculateTransactions }) => {
    const [amount, setAmount] = useState("")
    const [details, setDetails] = useState("")
    const [transtype, setTransType] = useState('expense');

    const addTransactionData = () => {
        console.log('transtype: ', transtype);
        AddTransactions({
            amount: Number(amount),
            details,
            transtype:transtype,
            id: Date.now()
        });
        calculateTransactions();
        setToggle();
    };
   
    return (
        <div className='text-center border p-4 rounded mb-4 '>
            <input type={"number"} className='form-control mb-3' placeholder='Enter amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
            <input type={"text"} className='form-control mb-3' placeholder='Enter details' value={details} onChange={(e) => setDetails(e.target.value)} />
            <div className='d-flex justify-content-center mb-3'>
                <div className='form-check  form-check-inline'>
                    <input className='form-check-input' type={"radio"} id='expense' name='type' value={"expense"} checked={transtype === 'expense'} onChange={(e) =>  setTransType(e.target.value)} />
                    <label className='form-check-label' htmlFor='expense'>Expense </label>
                </div>
                 
                <div className='form-check form-check-inline'>
                    <input className='form-check-input' type={"radio"} id='income' name='type' value={"income"} checked={transtype === 'income'} onChange={(e) => setTransType(e.target.value)} />
                    <label className='form-check-label' htmlFor='income'>Budget </label>
                </div>
            
            </div>
           
            <button type='submit' className='btn btn-success' onClick={addTransactionData}>AddTransaction</button>

        </div>
    )
}

export default AddTransaction