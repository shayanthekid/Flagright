import React from 'react';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
   
      </main>
    </div>
  );
}

export default App;
