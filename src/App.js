import React, { useState } from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import News from './pages/news';
import Background from './components/Background';
import Favorites from './pages/Favorites';
import { useDispatch, useStore } from 'react-redux';
import { Provider } from 'react-redux';
import Homepage from './pages/Homepage';

const App = () => {
  const dispatch = useDispatch();
  const store = useStore();


  return (
    <Provider store={store}>
    <Router>
       <Background />
       <div className="absolute">
      <Routes>
      <Route path="/" element={<Homepage />} />
        <Route path="/news" element={<News />} />
        <Route path="/favorite" element={<Favorites />} />
      </Routes>
      </div>
    </Router>
    </Provider>
  );
};

export default App;
