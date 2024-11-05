import React from 'react';
import { Route,Routes,BrowserRouter, } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/About-us';
import './App.css';
import Navbar from './Components/Shared/Navbar/Navbar';
import Footer from './Components/Shared/Footer/Footer';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about-us" element={<AboutUs/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;