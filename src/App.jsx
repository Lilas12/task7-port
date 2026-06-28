import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import AdminLayout from './components/AdminLayout'
import UserLayout from './components/UserLayout'
import GetAlphaBit from './components/GetAlphaBit'
import './App.css'

function App() {
  return (
    // LÄGG TILL BASENAME HÄR:
    <BrowserRouter basename="/task7-port">
      <nav className="navbar">
        <div className="navbar-brand">
          <span>MyPortfolio</span>
        </div>

        <div className="navbar-links">
          <Link to="/admin">Admin</Link>
          <Link to="/user">User</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/admin" element={<AdminLayout />} />
        <Route path="/user" element={<UserLayout />} />
        <Route path="/getalphabit" element={<GetAlphaBit />} />
        <Route path="/" element={<AdminLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
