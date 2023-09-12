import React, { useEffect, useState } from 'react'

const InputBox = ({
  label,
  onCurrencyChange,
  amount,
  onAmountChange,
  list,
  selectCurrency

}) => {

  return (
    
      <div className='bg-slate-100 flex flex-col w-1/2 h-[20%] justify-evenly my-2 rounded-md border-4 border-green-500'>
        
        <div className='flex flex-row justify-around items-center'>

          <h1>{label}</h1>
          <h1>Currency Type</h1>
        
        </div>

        <div className='flex flex-row justify-around items-center'>

          <input 
            value={amount}
            onChange={(e) => onAmountChange(Number(e.target.value))}
            type="number"
            
            className='w-[25%] p-1 self-start bg-slate-300 rounded-md outline-none'
          />
          
          <select 
            className='p-1 bg-gray-300 cursor-pointer outline-none rounded-md '
            value={selectCurrency}
            onChange={(e) => onCurrencyChange(e.target.value)}
          >
            {
              list.map((items , ind) =>(
                <option key={items}>{items}</option>
              ))
            }
          </select>
        
        </div>
     
      </div>

  )
}

export default InputBox
