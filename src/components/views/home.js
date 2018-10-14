import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText } from 'mdbreact';

import '../App.css';

const blockImg = {
  marginTop: "10px",
  marginBottom: "10px",
  borderRadius: "5%"
}

const underline = {
  textDecoration: "underline"
}

export default class Home extends Component {
  render() {
    return(
      <div>

        <h3 class="content">Invest In Your Future</h3>

        <div class="content container">
          <div class="row">
            <div class="col"></div>
            <div class="col-12 col-sm-6">
              <img style={blockImg} src="https://res.cloudinary.com/poetrique/image/upload/v1539293129/clients/leadcityfashion/lcufla_pink.png" alt="Lead City Fashion & Lifestyle Academy" title="Lead City Fashion & Lifestyle Academy" width="100%" height="auto" />
            </div>
            <div class="col"></div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col"></div>
            <div class="col-12 col-sm-6">
              <h3 style={underline}>Our Strengths</h3>
              <p className="blue-text">Well-tailored curriculum</p>
              <p className="blue-text">Training workshops by seasoned professionals</p>
              <p className="blue-text">Conducive learning centre</p>
              <p className="blue-text">... and lots more</p>
            </div>
            <div class="col"></div>
          </div>
        </div>

        <div class="container">
          <div class="row content">
            <div class="col"></div>
            <div class="col-12 col-sm-8">
              <Card>
                <CardBody>
                  <CardTitle>We offer 3 month Programs in</CardTitle>
                  <CardText>
                    <p><b>Photography</b></p>
                    <p><b>Pattern Drafting</b></p>
                    <p><b>Fashion Designing</b></p>
                    <p><b>Fashion Styling</b></p>
                    <p><b>Fashion Illustration</b></p>
                    <p><b>Modelling</b></p>
                    </CardText>
                </CardBody>
              </Card>
            </div>
            <div class="col"></div>
          </div>
        </div>

      </div>
    );
  }
}