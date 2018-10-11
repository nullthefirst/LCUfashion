import React, { Component } from 'react';
import './components/App.css';

const openStyle = {
  marginTo: "20px"
}

class App extends Component {
  render() {
    return (
      <div>
        <h1 style={openStyle}>Hello World</h1>
      </div>
    );
  }
}

export default App;
