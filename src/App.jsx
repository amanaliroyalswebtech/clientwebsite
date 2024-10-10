import React from 'react';
import Home from './pages/Home';
import { Outlet } from 'react-router-dom';
import Footer from '/src/pages/Footer'

function App() {

//   ];
  return (
    <>
    <Home />
    <Outlet />
    < Footer />
    </>
  )
}

export default App
