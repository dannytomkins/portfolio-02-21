import '../App.css';
// import Navbanner from './Navbanner';

import {portfolioItems} from '../data/portfolioItems'


import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact'

// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch
// } from "react-router-dom";

function App() {
  return (
    <div>
    <About />
    <Portfolio 
    portfolioItems={portfolioItems}
    />
    <Contact />

    </div>
    );
}

export default App;
