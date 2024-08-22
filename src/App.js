import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App = () => (
  <div className="App">
    <Navbar />
    <HeroSection />
    <AboutMe />
    <Projects />
    <Experience />
    <Contact />
  </div>
);

export default App;


