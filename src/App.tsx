import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Manifesto from './pages/Manifesto';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/manifesto" element={<Manifesto />} />
    </Routes>
  );
}
