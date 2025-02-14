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
import { toast } from 'react-toastify';
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
        toast.info("Removed item", { position: 'top-center' })
    }

    const saveOutput = () => {
        if (droppedItems.length == 0) {
            toast.error("Add items please!!!", { position: 'top-center' })
            return;
        }
        setOutputItems(droppedItems)
        navigate('/output')
    }

    return (
        <>
            <div
                ref={setNodeRef}
                className="w-3/4 h-[100vh] bg-gray-200 dark:bg-slate-800 p-4"

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

                            <div key={`${index}-${item}`} className='border-2 border-dashed border-indigo-600 dark:border-slate-100 m-2'>
                                <div>
                                    <SortableItem id={item}></SortableItem>
                                    <Trash2 className='dark:text-gray-100 text-gray-800' size={24} onClick={() => removeItem(item)} />
                                </div>
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