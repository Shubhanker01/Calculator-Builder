import React from 'react'
import RenderElement from './RenderElement'
import useCalculatorStore from '../store'

function Output() {
    const { outputItems } = useCalculatorStore()
    return (
        <>
            <div className='bg-gray-100 flex flex-col justify-center w-full h-full'>
                {
                    outputItems.map((ele, ind) => {
                        return <RenderElement element={ele} key={ind}></RenderElement>
                    })
                }
            </div>
        </>
    )
}

export default Output