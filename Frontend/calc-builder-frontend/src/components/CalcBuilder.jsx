import React, { useState } from 'react'
import { DndContext } from '@dnd-kit/core'
import Sidebar from './Sidebar'
import DropArea from './DropArea'

function CalcBuilder() {
    const [parent, setParent] = useState(null)

    const handleDragEnd = (e) => {
        const { over } = e;
        setParent(over ? over.id : null);
    }
    return (
        <>
            <h1>Hello I am a Calculator builder</h1>
            <DndContext onDragEnd={handleDragEnd}>
                <div className="flex h-screen">
                    <Sidebar />
                    <DropArea parent={parent} />
                </div>
            </DndContext>
        </>
    )
}

export default CalcBuilder