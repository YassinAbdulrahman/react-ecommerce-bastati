import { Route, Routes } from "react-router-dom";
import './App.css'
import AllProducts from './Pages/AllProducts'
function App() {


  return (
    <div classNameName="App">
      <Routes>
        <Route path="/" element={<AllProducts />} />
      </Routes>
    </div>
  )
}

export default App
