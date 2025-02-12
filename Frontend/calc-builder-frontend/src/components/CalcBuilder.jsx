import React, { useState } from 'react'
import { DndContext } from '@dnd-kit/core'
import Sidebar from './Sidebar'
import DropArea from './DropArea'

function CalcBuilder() {
    const [droppedItems, setDroppedItems] = useState([])

    const handleDragEnd = (e) => {
        const { over } = e;
        if (over && over.id === 'drop-area') {
            setDroppedItems((prev) => [...prev, e.active.id])
        }
    }
    return (
        <>
            <DndContext onDragEnd={handleDragEnd}>
                <div className="flex h-screen">
                    <Sidebar />
                    <DropArea droppedItems={droppedItems} setDroppedItems={setDroppedItems} />
                </div>
            </DndContext>
        </>
    )
}

export default CalcBuilder