import '../App.css';
import React, {useState} from 'react'

import {portfolioItems} from '../data/portfolioItems'
import {aboutItems} from '../data/aboutitems'

import Navbar from './Navbar';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Modal from './Modal';

function App() {
  // PORTAL TEST USESTATE
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
    {/* <Navbar /> */}
    <About
    aboutItems={aboutItems}
    />
    <Skills
    aboutItems={aboutItems}
    />
    <Portfolio 
    portfolioItems={portfolioItems}
    />
    <Contact />
    </div>
    );
}

export default App;
