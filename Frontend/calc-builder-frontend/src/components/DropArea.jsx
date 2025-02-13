import React from 'react'
import { useDroppable } from '@dnd-kit/core'
import { Trash2 } from 'lucide-react'
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useSensor, useSensors, PointerSensor, closestCenter, DndContext, KeyboardSensor } from '@dnd-kit/core';

import SortableItem from './SortableItem';

function DropArea({ droppedItems, setDroppedItems }) {
    const { setNodeRef } = useDroppable({ id: 'drop-area' })
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );
    function handleDragEnd(event) {
        const { active, over } = event;

        if (active.id !== over.id) {
            setDroppedItems((items) => {
                const oldIndex = items.indexOf(active.id);
                const newIndex = items.indexOf(over.id);

                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }
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
                <DndContext sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}>
                    <SortableContext
                        items={droppedItems}
                        strategy={verticalListSortingStrategy}
                    >
                        {droppedItems.map((item, index) => (

                            <div key={`${index}-${item}`}>
                                <SortableItem id={item}></SortableItem>
                                <Trash2 size={24} onClick={() => removeItem(item)} />
                            </div>

                        ))}

                    </SortableContext>
                </DndContext>
            </div>
        </>
    )
}

export default DropArea