import React, { Component} from 'react';
import Login from '../presentational/Login';

export default class Header extends Component {
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
