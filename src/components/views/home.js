import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText } from 'mdbreact';

import '../App.css';

const blockImg = {
  marginTop: "10px",
  marginBottom: "10px",
  borderRadius: "5%"
}

export default class Home extends Component {
  render() {
    return(
      <div>

        <div class="container">
          <div class="row">
            <div class="col"></div>
            <div class="col-12 col-sm-6">
              <img style={blockImg} src="https://res.cloudinary.com/poetrique/image/upload/v1539293129/clients/leadcityfashion/lcufla_pink.png" alt="Lead City Fashion & Lifestyle Academy" title="Lead City Fashion & Lifestyle Academy" width="100%" height="auto" />
            </div>
            <div class="col"></div>
          </div>
        </div>

        <h3 class="content">WHAT ARE DEVELOPER STUDENT CLUBS?</h3>
        <div class="container">
          <div class="row content">
            <div class="col"></div>
            <div class="col-12 col-sm-8">
              <Card>
                <CardBody>
                  <CardTitle>Introduction to Web Development & Github</CardTitle>
                  <CardText>
                    <p>Venue: ROC World Entrepreneurial Development Centre, Vocational Unit 1 Building</p>
                    <br />
                    <p><b>Lead City University, Ibadan - NG</b></p>
                    </CardText>
                </CardBody>
              </Card>
            </div>
            <div class="col"></div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col"></div>
            <div class="col-12 col-sm-6">
              <p className="blue-text">Technical skills: Throughout the program, students would be introduced to mobile app development courses developed by Google developers and Udacity.</p>
              <p className="blue-text">Opportunity to acquire and demonstrate soft skills through leadership, team management, budget management, communication and project management skills.</p>
              <p className="blue-text">Gain project-based work experience by identifying and solving local businesses’ problems using technology.</p>
            </div>
            <div class="col"></div>
          </div>
        </div>

      </div>
    );
  }
}