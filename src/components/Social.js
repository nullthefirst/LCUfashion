import React, { Component } from 'react';

import './App.css';

const powerStyle = {
  textAlign: "center",
  marginBottom: "1em"
}

export default class Social extends Component {
  render() {
    return (
      <div>
        
        <h4 style={powerStyle} class="content">Follow Us</h4>

        <div class="container">
          <div class="row">
            <div class="col"></div>
            <div class="col-12 col-sm-6">
              <span className="blue-text">+234(0)8178791781</span>
            </div>
            <div class="col"></div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col"></div>
            <div class="col-12 col-sm-6">
              <div class="row">
                <div class="col"></div>
                <div class="col-4">
                  <a href="https://www.instagram.com/lcfl_academy" target="_blank" rel="noopener noreferrer" className="blue-text"><i class="fab fa-instagram fa-3x"></i></a>
                </div>
                <div class="col-4">
                  <i class="fab fa-facebook fa-3x"></i>
                </div>
                <div class="col"></div>
              </div>
            </div>
            <div class="col"></div>
          </div>
        </div>
          
      </div>
    );
  }
};