import React from 'react'

function RenderElement({ element }) {
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
}

export default RenderElement