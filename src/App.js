import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="portfolio" component={Portfolio} />
        <Route exact path="contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
