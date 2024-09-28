import { useState } from 'react'
import './App.css'
import {BrowserRouter,Route,Routes,Navigate} from "react-router-dom"
import GoogleLogin from './Pages/GoogleLogin'
import Dashboard from './Pages/Dashboard'
import ErrorPage from './Pages/ErrorPage'
import { GoogleOAuthProvider } from '@react-oauth/google'
import RefreshHandler from './component/RefreshHandler'


function App() {
  const [isAuthenticated,setIsAuthenticated] = useState(false);
  const PrivateRoute = ({element})=>{
    return isAuthenticated?element:<Navigate to="/login"/>
  }

  const GoogleAuthWrapper = ()=>{
    return (
      <GoogleOAuthProvider clientId='234478002235-n413druujoqsg62b3g65fsreohin6qhg.apps.googleusercontent.com'>
        <GoogleLogin/>
      </GoogleOAuthProvider>
    )
  }
  return (
    <BrowserRouter>
    <RefreshHandler setIsAuthenticated={setIsAuthenticated}/>
    <Routes>
      <Route path="/login" element={<GoogleAuthWrapper/>} />
      <Route path="/" element={<Navigate to="/login"/>}/>
      <Route path='/dashboard' element={<PrivateRoute element={<Dashboard/>}/>} />
      <Route path='*' element={<ErrorPage/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
