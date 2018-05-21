import React, { Component } from 'react';
import '../App.css';
import lafamilia from './la-familia.jpg';

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
          src={lafamilia}
          alt="la familia"
          title="la familia"
          className="img-responsive img-rounded center-block"
        />
        <br />
      </div>
    );
  }
}

export default LaFamilia;
