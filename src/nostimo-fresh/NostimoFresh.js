import React, { Component } from 'react';
import '../App.css';
import nostimof from '../nostimo-front.jpg';
import nostimob from '../nostimo-back.jpg';


class NostimoFresh extends Component {
    render() {
        return (
            <div className="Nostimo">
                <header>
                    <h1>Nostimo Fresh</h1>
                </header>
                <br />
                <img src={nostimof} alt="huracan-front"
                    title="huracan-front" className="img-responsive img-rounded center-block" />
                <br />
                <img src={nostimob} alt="huracan-back"
                    title="huracan-back" className="img-responsive img-rounded center-block" />
            </div>
        );
    }
}

export default NostimoFresh;
