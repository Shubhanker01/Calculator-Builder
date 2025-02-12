import './App.css'

function App() {

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="max-w-3xl bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Calculator Builder</h1>
          <p className="text-gray-600 mb-6">
            Welcome to the <span className="font-semibold">Calculator Builder</span>, a dynamic tool that allows users to create and customize their own calculators with ease.
          </p>

          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Key Features:</h2>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li><span className="font-medium">Drag & Drop Functionality:</span> Seamlessly move and position elements to design your ideal calculator layout.</li>
            <li><span className="font-medium">Predefined Components:</span> Choose from essential elements such as number buttons, operation buttons (+, -, *, /), input fields, and an output display.</li>
            <li><span className="font-medium">Custom Layout Options:</span> Arrange buttons and fields in any order to create a calculator that fits your preferences.</li>
            <li><span className="font-medium">State Management with Zustand:</span> Ensures smooth performance and maintains your custom configurations in real time.</li>
            <li><span className="font-medium">User-Friendly Interface:</span> Intuitive design for effortless customization, even for users with no prior technical experience.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-700 mb-3">How It Works:</h2>
          <ol className="list-decimal list-inside text-gray-600 space-y-2">
            <li>Select the components you need from the predefined list.</li>
            <li>Drag and drop them onto the workspace to arrange them as desired.</li>
            <li>Configure the functionality to define how the calculator processes inputs and displays results.</li>
            <li>Save and test your customized calculator.</li>
          </ol>
        </div>
      </div>
    </>
  )
}

export default App
