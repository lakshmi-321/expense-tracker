import React, { useEffect, useState } from 'react';
import OverviewComponent from './OverviewComponent';
import AddTransaction from './AddTransaction';
import TransactionContainer from './TransactionContainer';

const Tracker = () => {
    const [toggle, setToggle] = useState(false);
    const [transactions, setTransactions] = useState([]);
    const [expense, setExpense] = useState(0);
    const [income, setIncome] = useState(0);

    const AddTransactions = (payload) => {
        const transactionArray = [...transactions];
        transactionArray.push(payload);
        setTransactions(transactionArray);
    };

    const removeTransaction = (id) => {
        const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
        setTransactions(updatedTransactions);
    };

    // Define 'calculateTransactions' outside of the useEffect
    const calculateTransactions = () => {
        let exp = 0;
        let inc = 0;
        transactions.forEach((item) => {
            if (item.transtype === 'expense') {
                exp += item.amount;
            } else if (item.transtype === 'income') {
                inc += item.amount;
            }
        });

        setExpense(exp);
        setIncome(inc);
    };

    useEffect(() => {
        calculateTransactions(); 
    }, [transactions]); 

    return (
        <div className='container mt-4 p-4 border border-dark rounded'>
            <h1 className="text-center mb-4">Expense Tracker</h1>
            <OverviewComponent toggle={toggle} setToggle={setToggle} expense={expense} income={income} />
            {toggle && (
                <AddTransaction setToggle={setToggle} AddTransactions={AddTransactions} calculateTransactions={calculateTransactions} />
            )}
            <div className='transaction-details row'>
                <div className='expense-box col'>
                    Expense <span className="text-center text-danger"> ₹ {expense}</span>
                </div>
                <div className='income-box col'>
                    Budget <span className="text-center text-success"> ₹ {income}</span>
                </div>
            </div>
            <TransactionContainer transactions={transactions} removeTransaction={removeTransaction} />
        </div>
    );
};

export default Tracker;
