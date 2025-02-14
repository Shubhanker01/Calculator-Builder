import React from 'react'
import DraggableElement from './DraggableElement'
import { TextCursorInput, Calculator, SquarePlus, SquareMinus, Divide, Asterisk, FileDigit, OctagonX } from 'lucide-react'

function Sidebar() {

    return (
        <>
            <div className="w-1/4 dark:bg-gray-800 dark:text-gray-100 bg-slate-200 text-gray-800 p-4 h-screen border-r border-gray-300">
                <h2 className="text-lg text-gray-700 dark:text-gray-200 font-semibold mb-4">Elements</h2>

                <DraggableElement id="input">
                    <div className='flex'>
                        <TextCursorInput size={24} />
                        <p className='sm:ml-4 hidden sm:block'>Input</p>
                    </div>
                </DraggableElement>
                <DraggableElement id="calculate">
                    <div className='flex'>
                        <Calculator size={24} />
                        <p className='sm:ml-4 hidden sm:block'>Calculate</p>
                    </div>
                </DraggableElement>
                <DraggableElement id="add">
                    <div className='flex'>
                        <SquarePlus size={24} />
                        <p className='sm:ml-4 hidden sm:block'>Add</p>
                    </div>
                </DraggableElement>
                <DraggableElement id="subtract">
                    <div className='flex'>
                        <SquareMinus size={24} />
                        <p className='sm:ml-4 hidden sm:block'>Subtract</p>
                    </div>
                </DraggableElement>
                <DraggableElement id="divide">
                    <div className='flex'>
                        <Divide size={24} />
                        <p className='sm:ml-4 hidden sm:block'>Divide</p>
                    </div>
                </DraggableElement>
                <DraggableElement id="multiplication">
                    <div className='flex'>
                        <Asterisk size={24} />
                        <p className='sm:ml-4 hidden sm:block'>Multiply</p>
                    </div>
                </DraggableElement>
                <DraggableElement id="numbers">
                    <div className='flex'>
                        <FileDigit size={24} />
                        <p className='sm:ml-4 hidden sm:block'>Numbers</p>
                    </div>
                </DraggableElement>
                <DraggableElement id="delete">
                    <div className='flex'>
                        <OctagonX size={24} />
                        <p className='sm:ml-4 hidden sm:block'>Delete</p>
                    </div>
                </DraggableElement>
            </div>
        </>
    )
}

export default Sidebar