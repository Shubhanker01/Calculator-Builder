import React from 'react'
import { Lightbulb } from 'lucide-react'

function ToggleTheme() {
    return (
        <div>
            <button className='fixed top-4 right-4'>
                <Lightbulb size={24} />
            </button>

        </div>
    )
}

export default ToggleTheme