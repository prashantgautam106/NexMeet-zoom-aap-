import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage.jsx';
import Authentication from './pages/authentication.jsx';
import { AuthProvider } from './contexts/authContext.jsx';
import HomeComponent from './pages/Home.jsx';
import VideoMeetComponent from './pages/videoMeet.jsx';
import History from './pages/History.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/auth' element={<Authentication />} />
          <Route path='/home' element={<HomeComponent />} />
          <Route path='/history' element={<History />} />
          <Route path='/:url' element={<VideoMeetComponent />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
