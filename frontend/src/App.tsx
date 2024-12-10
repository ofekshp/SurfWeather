import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import WeatherPage from './components/WeatherPage/WeatherPage.tsx'

function AppContent() {
  return (
    <div className='app'>
    <Routes>
          <Route path="/" element={<WeatherPage />} />
    </Routes>
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App
