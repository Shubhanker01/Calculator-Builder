import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import CalcBuilder from "./components/CalcBuilder"
import Output from "./components/Output"
import ToggleTheme from "./components/ToggleTheme"
import { ToastContainer, toast } from 'react-toastify';

function App() {

  return (
    <>
      <ToastContainer />
      <ToggleTheme />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/main-app" element={<CalcBuilder />}></Route>
        <Route path="/output" element={<Output />}></Route>
      </Routes>

    </>
  )
}

export default App
