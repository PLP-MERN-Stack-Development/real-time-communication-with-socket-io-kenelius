import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import LoginPage from './pages/loginpage.jsx'
import ProfilePage from './pages/profilepage.jsx'

const App = () => {
  return (
    <div className="bg-[url('./assets/backgroundimage.jpg')] bg-contain">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  )
}

export default App
