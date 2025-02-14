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

    const changeTheme = () => {
        if (document.body.className === 'light') {
            let backgroundImage = 'linear-gradient(to right, #ddd 1px, transparent 1px), linear-gradient(to bottom, #ddd 1px, transparent 1px)'
            return backgroundImage
        }

        else {
            let backgroundImage = `linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`

            return backgroundImage
        }
    }
    return (
        <>
            <div
                ref={setNodeRef}
                className="w-3/4 h-full bg-gray-100 dark:bg-[#121212] p-4"
                style={{ backgroundSize: '20px 20px', backgroundImage: changeTheme() }}
            >
                <h2 className="text-lg dark:text-gray-100 font-semibold col-span-4">Drop Components Here</h2>
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
                <button onClick={saveOutput} className='sm:w-[200px] w-[100px] fixed bottom-4 right-4 bg-slate-700 font-bold rounded-md sm:text-xl text-sm text-slate-100 p-2 hover:bg-slate-800'>Save and Continue</button>
            </div>
        </>
    )
}

export default DropArea