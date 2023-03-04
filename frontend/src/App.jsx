import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup/Signup';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/*" element={<h1>404 no page</h1>} />

      

     </Routes>
    </div>
  )
}

export default App