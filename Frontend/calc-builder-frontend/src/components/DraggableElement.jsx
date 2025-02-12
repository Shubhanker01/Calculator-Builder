import React from 'react'
import { useDraggable } from '@dnd-kit/core'

function DraggableElement({ id, children }) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({ id })
    return (
        <>
            <div
                ref={setNodeRef}
                {...attributes}
                {...listeners}
                className="p-2 bg-gray-600 text-gray-100 border rounded shadow-md mb-2 cursor-grab"
                style={{ transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined }}
            >
                {children}
            </div>
        </>
    )
}

export default DraggableElement