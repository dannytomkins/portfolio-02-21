import '../App.css';

import {portfolioItems} from '../data/portfolioItems'

import Header from './Header';
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
    <Header />
    <About />
    <Portfolio 
    portfolioItems={portfolioItems}
    />
    <Contact />

    </div>
    );
}

export default App;
