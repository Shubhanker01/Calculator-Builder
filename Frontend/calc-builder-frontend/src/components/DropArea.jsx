import React from 'react'
import { useDroppable } from '@dnd-kit/core'
import { nanoid } from 'nanoid'
import RenderElement from './RenderElement'
import { Trash2 } from 'lucide-react'

function DropArea({ droppedItems, setDroppedItems }) {
    const { setNodeRef } = useDroppable({ id: 'drop-area' })
    const removeItem = (id) => {
        setDroppedItems(droppedItems.filter(ele => ele !== id))
    }
    return (
        <>
            <div
                ref={setNodeRef}
                className="w-3/4 h-full bg-gray-100 p-4"
                style={{ backgroundSize: '20px 20px', backgroundImage: 'linear-gradient(to right, #ddd 1px, transparent 1px), linear-gradient(to bottom, #ddd 1px, transparent 1px)' }}
            >
                <h2 className="text-lg font-semibold col-span-4">Drop Components Here</h2>
                {droppedItems.map((item, index) => (
                    <div key={index} id={`${item}`} className="p-2 bg-gray-200 text-black rounded shadow-md hover:border-2 hover:border-double hover:border-indigo-700">
                        <RenderElement element={item} />
                        <Trash2 size={24} onClick={() => removeItem(item)} />
                    </div>


                ))}
            </div>
        </>
    )
}

export default DropArea