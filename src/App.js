import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route exact path='/portaldocliente' element={ <Home /> } />
      <Route exact path="/" element={ <Home /> } />
      <Route path="*" element={ <Navigate replace to="/portaldocliente" /> } />
    </Routes>
  );
}

export default App;
