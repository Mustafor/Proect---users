import { Route, Routes, Navigate } from 'react-router-dom'
import Users from '../../pages/Dashboard/Users'

function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/users" element={<Users />} />
      <Route path="/" element={<Navigate to="/users"/>}/>
    </Routes>
  )
}

export default DashboardRoutes
