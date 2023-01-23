import React from 'react';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Sources from './components/homepage_components/Sources';
import Organization from './components/homepage_components/Organization';
import Managment from './components/homepage_components/Managment';
function App() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <Sources />
        <Organization />
        <Managment />
      </main>
    </div>
  );
}

export default App;
