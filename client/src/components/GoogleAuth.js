import React, { Component } from 'react';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      console.log('loaded');
      window.gapi.client.init({
        clientId:
          '1019666479332-fvm3pp7l7kspmdoeavoc9d95d5etgab6.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }
  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
