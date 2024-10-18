import { useContext, useEffect } from 'react'
import './App.css'
import LoginRoutes from './routes/Login'
import { Context } from './context/Context'
import AOS from 'aos'
import 'aos/dist/aos.css'
import DashboardRoutes from './routes/Dashboard'
import { Route, Routes } from 'react-router-dom'

function App() {
  const { token } = useContext(Context)

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Routes>
    {token ? (
      <Route path="*" element={<DashboardRoutes />} />
    ) : (
      <Route path="*" element={<LoginRoutes />} />
    )}
  </Routes>
  )
}

export default App
