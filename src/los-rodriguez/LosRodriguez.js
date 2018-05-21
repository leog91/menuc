import React, { Component } from 'react';
import '../App.css';
import losrodriguez from './los-rodriguez.jpg';

class LosRodriguez extends Component {
  render() {
    return (
      <div className="LosRodriguez">
        <header>
          <h1>Los Rodriguez</h1>
        </header>
        <br />
        <img
          src={losrodriguez}
          alt="los rodriguez"
          title="los rodriguez"
          className="img-responsive img-rounded center-block"
        />
        <br />
      </div>
    );
  }
}

export default LosRodriguez;
