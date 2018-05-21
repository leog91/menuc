import React, { Component } from 'react';
import '../App.css';
import betarragaf1 from './betarraga-front-1.jpg';
import betarragab1 from './betarraga-back-1.jpg';

class Betarraga extends Component {
  render() {
    return (
      <div className="Betarraga">
        <header>
          <h1>Betarraga</h1>
        </header>
        <br />
        <img
          src={betarragaf1}
          alt="betarragaf1"
          title="betarragaf1"
          className="img-responsive img-rounded center-block"
        />
        <br />
        <img
          src={betarragab1}
          alt="betarragab1"
          title="betarragab1"
          className="img-responsive img-rounded center-block"
        />
      </div>
    );
  }
}

export default Betarraga;
