import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage.tsx'
import './App.css'

function AppContent() {
  return (
    <Routes>
          <Route path="/" element={<HomePage />} />
    </Routes>
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
