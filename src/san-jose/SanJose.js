import React, { Component } from "react";
import "../App.css";
import sanjosea from "../sanjose-a.jpg";
import sanjoseb from "../sanjose-b.jpg";
import sanjosec from "../sanjose-c.jpg";
import sanjosed from "../sanjose-d.jpg";

class SanJose extends Component {
  render() {
    return (
      <div className="SanJose">
        <header>
          <h1>San José</h1>
        </header>
        <br />
        <img
          src={sanjosea}
          alt="san-jose"
          title="san-jose"
          className="img-responsive img-rounded center-block"
        />
        <br />
        <img
          src={sanjoseb}
          alt="san-jose"
          title="san-jose"
          className="img-responsive img-rounded center-block"
        />
        <br />
        <img
          src={sanjosec}
          alt="san-jose"
          title="san-jose"
          className="img-responsive img-rounded center-block"
        />
        <br />
        <img
          src={sanjosed}
          alt="san-jose"
          title="san-jose"
          className="img-responsive img-rounded center-block"
        />
        <br />
      </div>
    );
  }
}

export default SanJose;
