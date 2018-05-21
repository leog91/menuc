import React, { Component } from 'react';
import homef from './home.png';

class Home extends Component {
  render() {
    return (
      <div>
        <h1> I'm Home¡ </h1>
        <br />
        <img
          src={homef}
          alt="home"
          title="home"
          className="img-responsive center-block"
        />
      </div>
    );
  }
}

export default Home;
