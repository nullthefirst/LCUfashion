import React, { Component } from 'react';

import './App.css';

const footerStyle = {
  textAlign: "center",
  marginTop: "2em"
}

const underline = {
  textDecoration: "underline"
}

export default class Footer extends Component {
  render() {
    return(
      <div style={footerStyle}>
        <h5>Lead City Fashion & Lifestyle Academy &copy; 2018 | All Rights Reserved</h5>
        <h6 style={underline}><a href="https://about.me/usheninte">Coded by Usheninte</a></h6>
      </div>
    );
  }
}