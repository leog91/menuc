import React, { Component } from 'react';
import '../App.css';
import losnenes from '../los-nenes.jpg';

class LosNenes extends Component {
  render() {
    return (
      <div className="LosNenes">
        <header>
          <h1>Los Nenes</h1>
        </header>
        <br />
        <img
          src={losnenes}
          alt="los nenes"
          title="los nenes"
          className="img-responsive img-rounded center-block"
        />
        <br />
      </div>
    );
  }
}

export default LosNenes;
