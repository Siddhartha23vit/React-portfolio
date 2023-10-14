import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import ContactUs from './components/ContactUs';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';

import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar /> {}
        <About />
        <Resume />
        <Portfolio />
        <Testimonials />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default App;
