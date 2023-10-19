import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import PropertyAdPage from './pages/PropertyAdPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-ad" element={<PropertyAdPage />} />
      </Routes>
    </Router>
  );
}

export default App;
