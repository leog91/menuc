import React, { Component } from 'react';
import '../App.css';
import huracanb from './huracan-back.jpg';
import huracanf from './huracan-front.jpg';

class Huracan extends Component {
  render() {
    return (
      <div className="Huracan">
        <header>
          <h1>Huracan</h1>
        </header>
        <br />
        <img
          src={huracanf}
          alt="huracan-back"
          title="huracan-back"
          className="img-responsive img-rounded center-block"
        />
        <br />
        <img
          src={huracanb}
          alt="huracan-back"
          title="huracan-back"
          className="img-responsive img-rounded center-block"
        />
      </div>
    );
  }
}

export default Huracan;
