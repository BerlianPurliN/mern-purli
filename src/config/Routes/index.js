import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../../pages/Login/index';
import Register from '../../pages/Register/index';
import Home from '../../pages/Home/index';

const Routes = () => {
  return (
    <Router>
        <Switch>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
      </Switch>
    </Router>
  );
};

export default Routes;