import React from 'react'

const OverviewComponent = ({toggle,setToggle, income,expense}) => {
    const bal= income - expense;
    
  return (
    <div className='d-flex align-items-center justify-content-between mb-4'>
        <div className='balance'>
            <h2>Balance: <span style={{fontWeight:"bold"}}>₹ {bal}</span></h2>
        </div>
        <button className='add-btn' onClick={()=> setToggle(!toggle)}>{toggle?"Cancel":"Add"}</button>
    </div>
  )
}

export default OverviewComponent