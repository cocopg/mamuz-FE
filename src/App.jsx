import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="phone">
      <div className="content">
        <Outlet />
      </div>

      <Navbar />
    </div>
  )
}

export default App