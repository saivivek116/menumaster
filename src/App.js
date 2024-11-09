import React from 'react';
import Header from './components/Header';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import RestaurantDetailsPage from './components/RestaurantDetailsPage';
import { RestaurantProvider } from './context/RestaurantContext';

const App = () => {


  return (
    <>
      <RestaurantProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/restaurant/:id" element={<RestaurantDetailsPage />} />
          </Routes>
        </Router>
      </RestaurantProvider>
    </>
  );
};

export default App;
