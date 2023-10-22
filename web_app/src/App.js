import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import PropertyAdPage from './pages/PropertyAdPage';
import PropertiesList from './pages/PropertiesListPage';
import Navbar from './components/Layout/Navbar';
import CentralModal from './components/Modal/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-ad" element={<PropertyAdPage />} />
        <Route path="/properties-list" element={<PropertiesList />} />
      </Routes>
      <CentralModal />
    </Router>
  );
}

export default App;
