import React, { Component } from 'react';
import '../App.css';
import lafamilia from './la-familia.jpg';
import lafamiliaa2 from './la-familia-a2.jpg';
import lafamiliab2 from './la-familia-b2.jpg';

class LaFamilia extends Component {
  render() {
    return (
      <div className="LaFamilia">
        <header>
          <h1>La Familia</h1>
          <h2>Tel: 4911-4692 / 11-4024-6544 </h2>
        </header>
        <br />

        <img
          src={lafamiliaa2}
          alt="la familia"
          title="la familia"
          className="img-responsive img-rounded center-block"
        />
        <br />
        <img
          src={lafamiliab2}
          alt="la familia"
          title="la familia"
          className="img-responsive img-rounded center-block"
        />

        <br />
        <hr />
        <br />
        <img
          src={lafamilia}
          alt="la familia"
          title="la familia"
          className="img-responsive img-rounded center-block"
        />
      </div>
    );
  }
}

export default LaFamilia;
