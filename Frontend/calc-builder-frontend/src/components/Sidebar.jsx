import React from 'react'
import DraggableElement from './DraggableElement'

function Sidebar() {
    let elements = ["input", "button", "add", "subtract", "divide"]
    return (
        <>
            <div className="w-1/4 bg-gray-800 text-gray-100 p-4 h-screen border-r border-gray-300">
                <h2 className="text-lg font-semibold mb-4">Elements</h2>

                {
                    elements.map((id) => {
                        return <DraggableElement key={id} id={id}>
                            {id}
                        </DraggableElement>
                    })
                }
            </div>
        </>
    )
}

export default Sidebar