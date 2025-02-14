import React from 'react'
import { Link } from 'react-router-dom'
import FeatureCard from './FeatureCard'

function Home() {
    return (
        <>
            <div className="min-h-screen bg-gray-100 dark:bg-gray-700 flex items-center justify-center p-6">
                <div className="sm:w-[80%] w-[95%] shadow-lg rounded-lg p-8">
                    <h1 className="text-4xl dark:text-gray-100 text-gray-700  font-bold mb-6 text-center">⚡ Calculator Builder</h1>
                    <p className="text-lg dark:text-gray-200 text-gray-700 text-center mb-6">
                        Drag and drop components to create your custom calculator. Customize layouts, add buttons, and build logic easily! 🛠️
                    </p>

                    <h2 className="text-2xl text-center font-semibold text-gray-700 mb-3 dark:text-gray-100">Key Features</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 max-w-4xl">
                        <FeatureCard emoji="🖱️" title="Drag & Drop" description="Easily place and arrange components." />
                        <FeatureCard emoji="➕" title="Operations" description="Use addition, subtraction, multiplication, and division." />
                        <FeatureCard emoji="🔢" title="Custom Layout" description="Arrange buttons the way you like." />
                        <FeatureCard emoji="📟" title="Live Preview" description="See the output instantly while editing." />
                        <FeatureCard emoji="🌑" title="Dark Mode" description="Switch between light and dark themes." />
                        <FeatureCard emoji="⚙️" title="State Management" description="Built with Zustand for smooth state handling." />
                    </div>

                    <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-100 mb-3">How It Works:</h2>
                    <ol className="list-decimal list-inside text-gray-600 space-y-2 dark:text-gray-300">
                        <li>Select the components you need from the predefined list.</li>
                        <li>Drag and drop them onto the workspace to arrange them as desired.</li>
                        <li>Configure the functionality to define how the calculator processes inputs and displays results.</li>
                        <li>Save and test your customized calculator.</li>
                    </ol>
                    <div className='mx-auto my-4 text-center'>
                        <Link to='/main-app' className='text-center w-[200px] bg-gray-700 font-bold rounded-md text-xl text-slate-100 p-2 hover:bg-slate-800'>Get Started</Link>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Home