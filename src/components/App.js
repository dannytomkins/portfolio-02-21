import '../App.css';
//import './Navbanner';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Aboutme from './Aboutme';
import Portfolio from './Portfolio';
import Padding from './Padding';

function App() {
  return (
    <div>
    <Navbar fixed="top" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#about-me">About Me</Nav.Link>
        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Navbar>
    <Aboutme />
    <Padding />
    <Portfolio />
    <Padding />
    <Padding />
    </div>
    );
}

export default App;
