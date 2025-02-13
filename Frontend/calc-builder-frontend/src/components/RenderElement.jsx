import React from 'react'
import DraggableElement from './DraggableElement'

function RenderElement({ element, ind }) {
    const digits = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.']
    if (element === 'input') {
        return (
            <>

                <input type='text' className='bg-gray-100 text-gray-800 w-[80%] rounded-md p-4 text-xl' placeholder='Enter number here'></input>


            </>
        )
    }
    else if (element === 'button') {
        return (
            <button className='bg-gray-800 text-gray-100 p-2 text-lg rounded-md cursor-pointer'>Click Me</button>
        )
    }
    else if (element === 'add') {
        return (
            <button className='bg-gray-800 text-gray-100 p-4 text-xl rounded-md cursor-pointer'>+</button>
        )
    }
    else if (element === 'subtract') {
        return (
            <button className='bg-gray-800 text-gray-100 p-4 text-xl rounded-md cursor-pointer'>-</button>
        )
    }
    else if (element === 'divide') {
        return (
            <button className='bg-gray-800 text-gray-100 p-4 text-xl rounded-md cursor-pointer'>/</button>
        )
    }
    else if (element === 'multiplication') {
        return (
            <button className='bg-gray-800 text-gray-100 p-4 text-xl rounded-md cursor-pointer'>*</button>
        )
    }
    else if (element === 'numbers') {
        return (
            <div className='grid grid-cols-3 gap-2 w-[20%]'>
                {
                    digits.map((digit, ind) => {
                        return (
                            <button className='bg-gray-800 text-gray-100 p-2 text-lg rounded-md cursor-pointer' key={ind}>{digit}</button>
                        )
                    })
                }
            </div>
        )
    }
    else if (element === 'delete') {
        return (
            <button className='bg-gray-800 text-gray-100 p-4 text-xl rounded-md cursor-pointer'>DEL</button>
        )
    }
}

export default RenderElement