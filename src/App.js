import React, { Component } from 'react';
import './components/App.css';

import AppMenu from './components/AppMenu';
import Social from './components/Social';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <AppMenu />
        <Social />
        <Footer />
      </div>
    );
  }
}

export default App;
