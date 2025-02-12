import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import CalcBuilder from "./components/CalcBuilder"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/main-app" element={<CalcBuilder />}></Route>
      </Routes>

    </>
  )
}

export default App
