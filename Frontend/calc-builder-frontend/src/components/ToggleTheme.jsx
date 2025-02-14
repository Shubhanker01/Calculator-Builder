import React, { useState } from 'react'
import { Lightbulb, Moon } from 'lucide-react'

function ToggleTheme() {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        if (theme == 'light') {
            setTheme('dark')
            document.body.className = 'dark'
        }
        else {
            setTheme('light')
            document.body.className = 'light'
        }
    }
    return (
        <div>
            <button onClick={toggleTheme} className='fixed top-4 right-4 cursor-pointer'>
                {
                    theme === 'light' ?
                        <Moon color='#292828' size={28} /> :
                        <Lightbulb color="#ffffff" size={28} />
                }

            </button>

        </div>
    )
}

export default ToggleTheme