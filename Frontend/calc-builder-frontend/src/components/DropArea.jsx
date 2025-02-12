import React from 'react'
import { useDroppable } from '@dnd-kit/core'
import DraggableElement from './DraggableElement'

function DropArea({ parent }) {
    const { setNodeRef } = useDroppable({ id: 'drop-area' })
    return (
        <>
            <div
                ref={setNodeRef}
                className="w-3/4 h-full bg-gray-100 grid grid-cols-4 gap-4 p-4"
                style={{ backgroundSize: '20px 20px', backgroundImage: 'linear-gradient(to right, #ddd 1px, transparent 1px), linear-gradient(to bottom, #ddd 1px, transparent 1px)' }}
            >
                <h2 className="text-lg font-semibold col-span-4">Drop Components Here</h2>
                {parent === null ? 'Drop Here' : <DraggableElement id="button" />}
            </div>
        </>
    )
}

export default DropArea