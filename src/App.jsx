import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  const [theme,setTheme] = useState('light');
  const toggleTheme = () => {
    const themeLink = document.getElementById('theme-link');
    if (theme === 'light'){
      themeLink.href = '/src/themes/dark.css';
      setTheme('dark');
    } else {
      themeLink.href = '/src/themes/light.css';
         setTheme('light');
    }
  };
  return (
    <div>
      <header className='container'>
         <h1>Minimal Landing</h1>
         <button onClick={toggleTheme}>
          {theme === 'light' ? 'Switch to dark':'Switch to Light'}
         </button>
      </header>
      <section className='hero-container'>
        <h2>Fast & Clean</h2>
        <p>Built </p>
        <button>Download app</button>
      </section>
      <Header />
      <Hero />
      <Features />
      <Footer />
      
    </div>
  );
}

export default App;