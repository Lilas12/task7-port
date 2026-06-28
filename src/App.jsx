// 1. ÄNDRA IMPORTEN HÄR:
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import AdminLayout from './components/AdminLayout'
import UserLayout from './components/UserLayout'
import GetAlphaBit from './components/GetAlphaBit'
import './App.css'

function App() {
  return (
    // 2. ÄNDRA TILL HASHROUTER HÄR (Basename behövs inte längre):
    <HashRouter>
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
    </HashRouter>
  )
}

export default App
