import React, { Component } from 'react';
import '../App.css';
import megustaf1 from './me-gusta-front-1.jpg';
import megustab1 from './me-gusta-back-1.jpg';

class MeGusta extends Component {
  render() {
    return (
      <div className="MeGusta">
        <header>
          <h1>Me Gusta - despacho de comidas -</h1>
        </header>
        <br />
        <img
          src={megustaf1}
          alt="megustaf1"
          title="megustaf1"
          className="img-responsive img-rounded center-block"
        />
        <br />
        <img
          src={megustab1}
          alt="megustab1"
          title="megustab1"
          className="img-responsive img-rounded center-block"
        />
      </div>
    );
  }
}

export default MeGusta;
