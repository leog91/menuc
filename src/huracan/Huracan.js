import React, { Component } from 'react';
import '../App.css';
import huracanb1 from './huracan-back1.jpg';
import huracanf1 from './huracan-front1.jpg';
import huracanb2 from './huracan-back-2.jpg';
import huracanf2 from './huracan-front2.jpg';

class Huracan extends Component {
  render() {
    return (
      <div className="Huracan">
        <header>
          <h1>Huracan</h1>
        </header>
        <br />
        <img
          src={huracanf2}
          alt="huracan-back"
          title="huracan-back"
          className="img-responsive img-rounded center-block"
        />
        <br />
        <img
          src={huracanb2}
          alt="huracan-back"
          title="huracan-back"
          className="img-responsive img-rounded center-block"
        />

        <br />
        <hr />
        <br />
        <img
          src={huracanf1}
          alt="huracan-back"
          title="huracan-back"
          className="img-responsive img-rounded center-block"
        />
        <br />
        <img
          src={huracanb1}
          alt="huracan-back"
          title="huracan-back"
          className="img-responsive img-rounded center-block"
        />
      </div>
    );
  }
}

export default Huracan;
