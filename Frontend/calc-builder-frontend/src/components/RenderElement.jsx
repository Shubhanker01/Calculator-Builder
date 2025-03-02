import React, { useState } from 'react'
import useCalculatorStore from '../store'

function RenderElement({ element }) {
    const { expression, setExpression, clearExpression, calculateResult } = useCalculatorStore()
    const digits = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.']
    if (element === 'input') {
        return (
            <>
                <p className='bg-gray-100 text-gray-800 w-[80%] rounded-md p-4 sm:text-xl m-2 text-sm' placeholder='Enter number here' >{expression || "Your number will display here..."}</p>

            </>
        )
    }
    else if (element === 'calculate') {
        return (
            <button onClick={calculateResult} className='bg-gray-800 dark:bg-gray-200 dark:text-gray-800 text-gray-100 sm:p-4 p-2 sm:text-lg text-sm rounded-md cursor-pointer m-2'>=</button>
        )
    }
    else if (element === 'add') {
        return (
            <button onClick={() => setExpression('+')} className='bg-gray-800 text-gray-100 sm:p-4 p-2 dark:bg-gray-200 dark:text-gray-800 sm:text-xl text-sm rounded-md cursor-pointer m-2'>+</button>
        )
    }
    else if (element === 'subtract') {
        return (
            <button onClick={() => setExpression('-')} className='bg-gray-800 text-gray-100 sm:p-4 p-2 sm:text-xl text-sm rounded-md cursor-pointer dark:bg-gray-200 dark:text-gray-800 m-2'>-</button>
        )
    }
    else if (element === 'divide') {
        return (
            <button onClick={() => setExpression('/')} className='bg-gray-800 text-gray-100 sm:p-4 p-2 sm:text-xl text-sm rounded-md cursor-pointer dark:bg-gray-200 dark:text-gray-800 m-2'>/</button>
        )
    }
    else if (element === 'multiplication') {
        return (
            <button onClick={() => setExpression('*')} className='bg-gray-800 text-gray-100 sm:p-4 sm:text-xl p-2 text-sm rounded-md cursor-pointer dark:bg-gray-200 dark:text-gray-800 m-2'>*</button>
        )
    }
    else if (element === 'numbers') {
        return (
            <div className='grid grid-cols-3 gap-2 sm:w-[20%] w-[55%] m-2'>
                {
                    digits.map((digit, ind) => {
                        return (
                            <button onClick={() => setExpression(digit)} className='bg-gray-800 text-gray-100 p-2 text-lg rounded-md cursor-pointer dark:bg-gray-200 dark:text-gray-800' key={ind}>{digit}</button>
                        )
                    })
                }
            </div>
        )
    }
    else if (element === 'delete') {
        return (
            <button onClick={clearExpression} className='bg-gray-800 text-gray-100 sm:p-4 p-2 sm:text-xl text-sm rounded-md cursor-pointer dark:bg-gray-200 dark:text-gray-800 m-2'>DEL</button>
        )
    }
}

export default RenderElement