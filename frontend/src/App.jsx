import { useState } from 'react'
// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import RecipeSearch from './pages/RecipeSearch/RecipeSearch';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<RecipeSearch />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/*" element={<h1>404 no page</h1>} />

        </Routes>
      </main>
    </div>
  )
}

export default App
