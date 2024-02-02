import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import './App.css';
import AuthLayout from './OutletAndLayout/AuthLayout';
import Layout from './OutletAndLayout/Layout';
import RegisterinForsageBUSDPage from './Components/RegisterinForsageBUSDPage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes for the AuthLayout */}
        <Route path={`/*` } element={<AuthLayout />}>
          <Route path="RegisterinForsageBUSDPage" element={<RegisterinForsageBUSDPage />} />
        </Route>

        {/* Routes for the Layout */}
          <Route index element={<Home />} />
        </Routes>
    </Router>
  );
};

export default App;
