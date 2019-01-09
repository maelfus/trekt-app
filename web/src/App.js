import React, { Component } from 'react';
import './App.css';
import Header from './containers/Header';
import BnetAuth from './containers/BnetAuth';
import Home from './containers/Home';
import {
  BrowserRouter as Router,
  StaticRouter, // for server rendering
  Route,
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Header />

            <Route exact path="/" component={Home} />
            <Route path="/auth/bnet" component={BnetAuth} />
          </div>
        </Router>
    );
  }
}

export default App;
