import './App.css'
import { DashboardLayout } from './layouts/DashboardLayout'
import { Home } from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Home />} />
        <Route path="derp" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
