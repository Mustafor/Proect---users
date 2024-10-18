import { Route, Routes, Navigate } from 'react-router-dom'
import SignIn from '../../pages/Login/SignIn'
import SignUp from '../../pages/Login/SignUp'

function LoginRoutes() {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} /> 
      <Route path="*" element={<Navigate to="/sign-in" />} />
    </Routes>
  );
}

export default LoginRoutes
