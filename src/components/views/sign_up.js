import React, { Component } from 'react';
import { Button } from 'mdbreact';
import { Redirect } from 'react-router-dom';

const xStyle = {
  marginTop: "1em"
}

const yStyle = {
  marginBottom: "1em"
}

export default class SignUp extends Component {

  constructor() {
    super();
    this.state = {
      redirect: false
    };
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }

  render() {
    return (
      <div>

          <h3 class="content">Sign Up For Lead City Fashion & Lifestyle Academy</h3> 

          <img style={roundImg} src="" alt="Lead City Fashion & Lifestyle Academy" title="Lead City Fashion & Lifestyle Academy" />
          
          <div class="row content">
            <div class="col"></div>
            <div class="col-12 col-sm-8" style={xStyle}>
              <iframe title="Sign Up For Lead City Fashion & Lifestyle Academy" src="https://docs.google.com/forms/d/e/1FAIpQLSdrBDxI5YOhlFFz2fVzffrL7fV1pVw0x8xba0bOsEHl-M3z-A/viewform?embedded=true" width="100%" height="720" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
            </div>
            <div class="col"></div>
          </div>

          <div class="row content">
            <div class="col"></div>
            <div class="col">
              {this.renderRedirect()}
              <Button style={yStyle} type="submit"  color="success" onClick={this.setRedirect}>Continue</Button>
            </div>
            <div class="col"></div>
          </div>
      </div>
    );
  }
};