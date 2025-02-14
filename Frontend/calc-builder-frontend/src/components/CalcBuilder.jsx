import React, { useState } from 'react'
import {
    DndContext,
    useSensors,
    PointerSensor,
    TouchSensor,
    useSensor
} from '@dnd-kit/core'
import Sidebar from './Sidebar'
import DropArea from './DropArea'

function CalcBuilder() {
    const [droppedItems, setDroppedItems] = useState([])

    const sensors = useSensors(
        useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
        useSensor(TouchSensor, { activationConstraint: { delay: 200, tolerance: 5 } })
    )
    const handleDragEnd = (e) => {
        const { over } = e;
        if (over && over.id === 'drop-area') {
            setDroppedItems((prev) => [...prev, e.active.id])
        }
    }
    return (
        <>
            <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
                <div className="flex h-screen">
                    <Sidebar />
                    <DropArea droppedItems={droppedItems} setDroppedItems={setDroppedItems} />
                </div>
            </DndContext>
        </>
    )
}

export default CalcBuilder