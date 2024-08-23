import React from 'react';
import Header from './components/Header';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import RestaurantDetailsPage from './components/RestaurantDetailsPage';

const App = () => {
  

  return (
    <>
      <Router>
      <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/restaurant/:id" element={<RestaurantDetailsPage />} />
            </Routes>
      </Router>
    </>
  );
};

export default App;
