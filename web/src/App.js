import React from 'react';
import './App.css';

import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';

import Header from './containers/Header';
import BnetAuth from './containers/BnetAuth';
import Home from './containers/Home';


const App = ({ history }) => {
    return (
        <ConnectedRouter history={history}>
          <div>
            <Header />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/auth/bnet" component={BnetAuth} /> 
            </Switch>

          </div> 
        </ConnectedRouter>
    );
}

export default App;
