import '../App.css';
//import './Navbanner';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Aboutme from './Aboutme'

function App() {
  return (
    <div>
    <Navbar fixed="top" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Navbar>
    <Aboutme />
    <Aboutme />
    <Aboutme />
    <Aboutme />
    <Aboutme />
    <Aboutme />
    <Aboutme />
    <Aboutme />

    </div>
    );
}

export default App;
