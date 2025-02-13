import React from 'react'
import DraggableElement from './DraggableElement'
import { TextCursorInput, Calculator, SquarePlus, SquareMinus, Divide, Asterisk, FileDigit, OctagonX } from 'lucide-react'

function Sidebar() {

    return (
        <>
            <div className="w-1/4 bg-gray-800 text-gray-100 p-4 h-screen border-r border-gray-300">
                <h2 className="text-lg font-semibold mb-4">Elements</h2>

                <DraggableElement id="input">
                    <div className='flex'>
                        <TextCursorInput size={24} />
                        <p className='ml-4'>Input</p>
                    </div>
                </DraggableElement>
                <DraggableElement id="button">
                    <div className='flex'>
                        <Calculator size={24} />
                        <p className='ml-4'>Button</p>
                    </div>
                </DraggableElement>
                <DraggableElement id="add">
                    <div className='flex'>
                        <SquarePlus size={24} />
                        <p className='ml-4'>Add</p>
                    </div>
                </DraggableElement>
                <DraggableElement id="subtract">
                    <div className='flex'>
                        <SquareMinus size={24} />
                        <p className='ml-4'>Subtract</p>
                    </div>
                </DraggableElement>
                <DraggableElement id="divide">
                    <div className='flex'>
                        <Divide size={24} />
                        <p className='ml-4'>Divide</p>
                    </div>
                </DraggableElement>
                <DraggableElement id="multiplication">
                    <div className='flex'>
                        <Asterisk size={24} />
                        <p className='ml-4'>Multiply</p>
                    </div>
                </DraggableElement>
                <DraggableElement id="numbers">
                    <div className='flex'>
                        <FileDigit size={24} />
                        <p className='ml-4'>Numbers</p>
                    </div>
                </DraggableElement>
                <DraggableElement id="delete">
                    <div className='flex'>
                        <OctagonX size={24} />
                        <p className='ml-4'>Delete</p>
                    </div>
                </DraggableElement>
            </div>
        </>
    )
}

export default Sidebar