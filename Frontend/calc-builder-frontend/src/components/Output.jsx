import React from 'react'
import RenderElement from './RenderElement'
import useCalculatorStore from '../store'

function Output() {
    const { outputItems } = useCalculatorStore()
    return (
        <>
            <div className='bg-gray-100 w-screen h-full'>
                <div className='mx-auto'>
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