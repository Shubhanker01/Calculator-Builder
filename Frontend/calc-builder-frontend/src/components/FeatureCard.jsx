import React from 'react'

function FeatureCard({ emoji, title, description }) {
    return (
        <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
            <span className="text-5xl mb-2">{emoji}</span>
            <h2 className="text-xl dark:text-gray-200 font-semibold">{title}</h2>
            <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
    )
}

export default FeatureCard