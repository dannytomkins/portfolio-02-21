import '../App.css';
import React, {useState} from 'react'

import {portfolioItems} from '../data/portfolioItems'

import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact'
import Modal from './Modal'

// PORTAL TEST STYLING
const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1
}
const OTHER_CONTENT_STYLES = {
  position: 'relative',
  zIndex: 2,
  backgroundColor: 'red',
  padding: '10px'
}

function App() {
  // PORTAL TEST USESTATE
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
    <Header />
    <About />
    <Portfolio 
    portfolioItems={portfolioItems}
    />
    
    {/* PORTAL TEST */}
    <div style={BUTTON_WRAPPER_STYLES}>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
      Fancy Modal
    </Modal>
    </div>
    <div style={OTHER_CONTENT_STYLES}>Other Content</div>
    {/* {PORTAL TEST END} */}

    <Contact />
    </div>
    );
}

export default App;
