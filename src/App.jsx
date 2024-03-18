import React from 'react';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Routes, Route } from "react-router-dom";
import { Projects } from './components/Projects/Projects';
import { Services } from './components/Services/Services';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Career } from './components/Career/Career';
import { Contact } from './components/Contact/Contact';
import { Suspense } from 'react';
import { Footer } from './components/Footer/Footer';
import { useTranslation } from "react-i18next"
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme'


function App() {
  const { t, i18n } = useTranslation();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThemeProvider theme={theme}>

        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>

        <Footer />

      </ThemeProvider>
    </Suspense>
  )
}

export default App
