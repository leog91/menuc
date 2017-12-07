import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Home from './Home'
import Huracan from './huracan/Huracan';
import LosRodriguez from './los-rodriguez/LosRodriguez';
import LaFamilia from './la-familia/LaFamilia';
import MobS from './mobS/MobS';

const Main = () => (
    <main>
        <Router>
            <div>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/huracan">Huracan</Link></li>
                    <li><Link to="/losrodriguez">Los Rodriguez</Link></li>
                    <li><Link to="/lafamilia">Lo Familia</Link></li>
                    {/*      <li><Link to="/mobs">MobS</Link></li>*/}
                </ul>

                <hr />

                <Route exact path="/home" component={Home} />
                <Route path="/huracan" component={Huracan} />
                <Route path="/losrodriguez" component={LosRodriguez} />
                <Route path="/lafamilia" component={LaFamilia} />
                {/*<Route path="/mobs" component={MobS} />*/}
            </div>
        </Router>

    </main>

)

export default Main
