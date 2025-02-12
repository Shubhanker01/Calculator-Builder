import React from 'react'
import DraggableElement from './DraggableElement'

function Sidebar() {
    return (
        <>
            <div className="w-1/4 bg-gray-200 p-4 h-screen border-r border-gray-300">
                <h2 className="text-lg font-semibold mb-4">Elements</h2>
                <DraggableElement id="input">Input Field</DraggableElement>
                <DraggableElement id="button">Button</DraggableElement>
                <DraggableElement id="operation">Operation (+, -, *, /)</DraggableElement>
            </div>
        </>
    )
}

export default Sidebar