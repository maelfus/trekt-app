import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Login />
        </header>
      </div>
    );
  }
}

export default App;
