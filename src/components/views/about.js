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

        <h3 class="content">About Us</h3>

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
              <p className="blue-text">We infused our main objectives into the offical Lead City University logo. This is simply because of the values we're ready to offer.</p>
              <p className="blue-text">In the logo you can see a camera, this symbolizes the top-notch photograpghy we will teach all our students. The fashionable gentlelady depicts the fashion we are bringing to the university community&nbsp;- sewing, illustration, pattern drafting and more -&nbsp;that can compete with any standard in the world.</p>
              <p className="blue-text">This is definitely going to be one of the biggest things in Ibadan. It is the first of its kind in any Nigerian institution, and we are glad it is coming to Lead City, because we always <b>LEAD</b>.</p>
            </div>
            <div class="col"></div>
          </div>
        </div>

      </div>
    );
  }
}