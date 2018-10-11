import React, { Component } from 'react';

import '../App.css';

const blockImg = {
  marginTop: "20px",
  borderRadius: "5%"
}

export default class Facilities extends Component {
  render() {
    return(
      <div>

        <h3 class="content">Our Facilities</h3>

        <div class="container">
          <div class="row">
            <div class="col"></div>
            <div class="col-12 col-sm-6">
              <img style={blockImg} src="https://res.cloudinary.com/poetrique/image/upload/v1539293123/clients/leadcityfashion/lcufla_plain.jpg" alt="Lead City Fashion & Lifestyle Academy" title="Lead City Fashion & Lifestyle Academy" width="100%" height="auto" />
            </div>
            <div class="col"></div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col"></div>
            <div class="col-12 col-sm-6">
            </div>
            <div class="col"></div>
          </div>
        </div>

      </div>
    );
  }
}