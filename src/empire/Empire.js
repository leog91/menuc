import React, { Component } from 'react';
import '../App.css';
import empiref1 from './empire-front-1.jpg';
import empireb1 from './empire-back-1.jpg';

class Empire extends Component {
  render() {
    return (
      <div className="Empire">
        <header>
          <h1>Empire</h1>
        </header>
        <br />
        <img
          src={empiref1}
          alt="empiref1"
          title="empiref1"
          className="img-responsive img-rounded center-block"
        />
        <br />
        <img
          src={empireb1}
          alt="empireb1"
          title="empireb1"
          className="img-responsive img-rounded center-block"
        />
      </div>
    );
  }
}

export default Empire;
