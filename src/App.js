import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import "./App.css";
import AuthLayout from "./OutletAndLayout/AuthLayout";
import Layout from "./OutletAndLayout/Layout";
import RegisterinForsageBUSDPage from "./Components/RegisterinForsageBUSDPage";
import UserAccount from "./Components/UserAccount";
import AllUsers from "./Components/AllUsers";
import AllReferrals from "./Components/AllReferrals";
import Show from "./Components/Show";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes for the AuthLayout */}
        <Route path="/users/:userId" element={<UserAccount />} />
        <Route path="/allusers/:address" element={<AllUsers />} />
        <Route path="/referrals/:address" element={<AllReferrals />} />
        <Route path={`/*`} element={<AuthLayout />}>
          <Route
            path="RegisterinForsageBUSDPage"
            element={<RegisterinForsageBUSDPage />}
          />
          <Route path="Show" element={<Show />} />
        </Route>

        <Route index element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
