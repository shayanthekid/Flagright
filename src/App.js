import React from 'react';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Sources from './components/homepage_components/Sources';
function App() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <Sources />
      </main>
    </div>
  );
}

export default App;
