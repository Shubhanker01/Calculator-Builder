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
                className="p-2 dark:bg-gray-600 dark:text-gray-100 bg-gray-300 text-gray-700 border rounded shadow-md mb-2 cursor-grab"
                style={{ transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,touchAction:'none' }}
            >
                {children}
            </div>
        </>
    )
}

export default DraggableElement