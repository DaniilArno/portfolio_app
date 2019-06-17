import React, { Component } from 'react';
import './App.css';


import BootstrapMenu from '../BootStrapMenu/BootstrapMenu';
import About from '../About/About'
import Resume from '../Resume/Resume';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import FormPage from '../FormPage/FormPage';
import Footer from '../Footer/Footer';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <BootstrapMenu  />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
        <FormPage />
        <Footer />
      </div>
    );
  }
}

export default App;
