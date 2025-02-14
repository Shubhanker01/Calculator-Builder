import React from 'react'
import RenderElement from './RenderElement'
import useCalculatorStore from '../store'

function Output() {
    const { outputItems } = useCalculatorStore()
    return (
        <>
            <div className='bg-gray-100 dark:bg-gray-800 w-screen h-screen flex items-center justify-center'>
                <div className='mx-auto bg-gray-300 w-[80%]'>
                    {
                        outputItems.map((ele, ind) => {
                            return <RenderElement element={ele} key={ind}></RenderElement>
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default Output