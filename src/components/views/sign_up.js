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

          <h3 class="white-text content">Join the Developer Student Club</h3> 

          <div class="row content">
            <div class="col"></div>
            <div class="col-12 col-sm-8" style={xStyle}>
              <iframe title="Join the Developer Student Club at LCU" src="https://docs.google.com/forms/d/e/1FAIpQLSfPwhGjIuCjBovrw7N8Vk0gEGb9YPVrFD8qHJxrVW_FW8Oc9w/viewform?embedded=true" width="100%" height="720" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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