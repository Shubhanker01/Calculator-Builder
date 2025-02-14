import React from 'react'
import { Trash2 } from 'lucide-react'
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useSensor, useSensors, PointerSensor, closestCenter, DndContext, KeyboardSensor, TouchSensor, useDroppable } from '@dnd-kit/core';
import SortableItem from './SortableItem';
import useCalculatorStore from '../store';
import { useNavigate } from 'react-router-dom';

function DropArea({ droppedItems, setDroppedItems }) {
    const navigate = useNavigate()
    const { outputItems, setOutputItems } = useCalculatorStore()
    const { setNodeRef } = useDroppable({ id: 'drop-area' })
    const sensors = useSensors(
        useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
        useSensor(TouchSensor, { activationConstraint: { delay: 200, tolerance: 5 } }),
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

    const saveOutput = () => {
        setOutputItems(droppedItems)
        navigate('/output')
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
                <button onClick={saveOutput} className='w-[200px] fixed bottom-4 right-4 bg-slate-700 font-bold rounded-md text-xl text-slate-100 p-2 hover:bg-slate-800'>Save and Continue</button>
            </div>
        </>
    )
}

export default DropArea