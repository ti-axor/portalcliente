import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Home /> } />
      <Route exact path="/portaldocliente" element={ <Home /> } />
    </Routes>
  );
}

export default App;
