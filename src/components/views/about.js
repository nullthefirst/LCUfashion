import React, { Component } from 'react';

import '../App.css';

const roundImg = {
  marginTop: "20px",
  borderRadius: "50%"
}

export default class About extends Component {
  render() {
    return(
      <div>

        <img style={roundImg} src="https://res.cloudinary.com/poetrique/image/upload/v1538920604/developer-student-club/dsc.png" alt="Developer Student Club" title="Developer Student Club" />

        <h3 class="white-text content">WHAT ARE DEVELOPER STUDENT CLUBS?</h3>
        <div class="container">
          <div class="row">
            <div class="col"></div>
            <div class="col-12 col-sm-6">
              <p className="light-green-text">DSC is a Google Developers program for university students, designed to help them build their mobile and web development skills and knowledge. It is open to any student, ranging from novice developers who are just starting, to advanced developers who want to further their skills. It is intended to be a space for students to learn and collaborate as they solve mobile and web development problems.</p>
              <p className="light-green-text">This is part of Google’s commitment to provide mobile developer training to 100,000 Africans to develop world-class apps in the next 5 years. The Developer Student Clubs (DSC) is a grassroots channel through which we provide development skills for students, towards employability. The program invites students enrolled in African universities to act as “agent of change” on their campus(es).</p>
              <p className="light-green-text">DSCs follow a model of peer-to-peer learning. We select student Leads who train other students, help them apply the skills by developing solutions for local businesses, and host showcases for students to present their prototypes/solutions. This not only upskills current developers, but also inspires new developers thus realizing rapid scale.</p>
            </div>
            <div class="col"></div>
          </div>
        </div>

        <h3 class="white-text content">DSC MEMBERSHIP BENEFITS</h3>
        <div class="container">
          <div class="row">
            <div class="col"></div>
            <div class="col-12 col-sm-6">
              <p className="light-green-text">Technical skills: Throughout the program, students would be introduced to mobile app development courses developed by Google developers and Udacity.</p>
              <p className="light-green-text">Opportunity to acquire and demonstrate soft skills through leadership, team management, budget management, communication and project management skills.</p>
              <p className="light-green-text">Gain project-based work experience by identifying and solving local businesses’ problems using technology.</p>
            </div>
            <div class="col"></div>
          </div>
        </div>

      </div>
    );
  }
}