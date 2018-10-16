import React, { Component } from 'react';

import '../App.css';

const blockImg = {
  marginTop: "10px",
  marginBottom: "10px",
  borderRadius: "5%"
}

export default class About extends Component {
  render() {
    return(
      <div>

        <h3 class="content">Our Mission</h3>

        <div class="container">
          <div class="row">
            <div class="col"></div>
            <div class="col-12 col-sm-6">
              <img style={blockImg} src="https://res.cloudinary.com/poetrique/image/upload/v1539293123/clients/leadcityfashion/lcufla_plain.jpg" alt="Lead City Fashion & Lifestyle Academy" title="Lead City Fashion & Lifestyle Academy" width="100%" height="auto" />
            </div>
            <div class="col"></div>
          </div>
        </div>

        <div class="content container">
          <div class="row">
            <div class="col"></div>
            <div class="col-12 col-sm-6">
              <p className="blue-text">To provide quality education & training conducive to the optimal development of each student by ensuring individual attention and committment to learners, in order to maximise their unique potential and equip them to enter the fashion industry in any field with confidence, except knowledge and skill.</p>
            </div>
            <div class="col"></div>
          </div>
        </div>

      </div>
    );
  }
}