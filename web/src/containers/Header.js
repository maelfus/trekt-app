import React, { Component} from 'react';
import Login from '../presentational/Login';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
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

const mapStateToProps = (state) => {
    const {user} = state;
    return {
        user: user
    }
}

export default withRouter(connect(mapStateToProps)(Header))
