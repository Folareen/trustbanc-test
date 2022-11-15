import {Navigate, BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./pages/login/Login"
import Dashboard from "./pages/dashboard/Dashboard"
import NotFound from "./pages/notFound/NotFound"

function App() {
  const isLoggedIn = false
  return (
    <div>
      <Router>
          <Routes>
          {
          isLoggedIn
          ?
          <>
          <Route path='/' element={<Navigate replace to="/dashboard" />}/>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/login' element={<Navigate replace to="/dashboard" />}/>
          </>
          :
          <>
          <Route path='/' element={<Navigate replace to="/login" />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Navigate replace to="/login" />}/>
          </>
          }
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
