import React from 'react'
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import RenderElement from './RenderElement';

function SortableItem({ id }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id: id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };
    return (
        <>
            <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
                <RenderElement element={id}></RenderElement>
            </div>
        </>
    )
}

export default SortableItem