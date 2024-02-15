import React from 'react';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Routes, Route } from "react-router-dom";
import { Projects } from './components/Projects/Projects';
import { Services } from './components/Services/Services';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Career } from './components/Career/Career';

import { Footer } from './components/Footer/Footer';


function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Services" element={<Services />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="Career" element={<Career />} />
      </Routes>
      <h1> </h1>
      <Footer />

    </>
  )
}


export default App
