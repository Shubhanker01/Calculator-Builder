import React, { useEffect, useState } from 'react'
import { Lightbulb, Moon } from 'lucide-react'

function ToggleTheme() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme])
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
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