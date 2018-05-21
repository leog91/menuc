import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import Huracan from './huracan/Huracan';
import LosRodriguez from './los-rodriguez/LosRodriguez';
import LaFamilia from './la-familia/LaFamilia';
import LosNenes from './los-nenes/LosNenes';
import NostimoFresh from './nostimo-fresh/NostimoFresh';
import SanJose from './san-jose/SanJose';
import Betarraga from './betarraga/Betarraga';
import Empire from './empire/Empire';
import MeGusta from './me-gusta/MeGusta';

const Main = () => (
  <main>
    <div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/betarraga">Betarraga</Link>
        </li>
        <li>
          <Link to="/empire">Empire</Link>
        </li>
        <li>
          <Link to="/huracan">Huracan</Link>
        </li>
        <li>
          <Link to="/lafamilia">La Familia</Link>
        </li>
        <li>
          <Link to="/losnenes">Los Nenes</Link>
        </li>
        <li>
          <Link to="/losrodriguez">Los Rodriguez</Link>
        </li>
        <li>
          <Link to="/megusta">Me Gusta - despacho de comidas</Link>
        </li>
        <li>
          <Link to="/nostimofresh">Nostimo Fresh</Link>
        </li>
        <li>
          <Link to="/sanjose">San José</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/home" component={Home} />
      <Route path="/huracan" component={Huracan} />
      <Route path="/losrodriguez" component={LosRodriguez} />
      <Route path="/lafamilia" component={LaFamilia} />
      <Route path="/losnenes" component={LosNenes} />
      <Route path="/nostimofresh" component={NostimoFresh} />
      <Route path="/sanjose" component={SanJose} />
      <Route path="/betarraga" component={Betarraga} />
      <Route path="/empire" component={Empire} />
      <Route path="/megusta" component={MeGusta} />
    </div>
  </main>
);

export default Main;
