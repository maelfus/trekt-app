import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import NewUser from './NewUser';

class Home extends Component {

    render() {
        return(
            <div>
                {this.props.user.newUserStage >= 1 && this.props.user.id && <NewUser />}
                {this.props.characters.characters !== undefined && this.props.user.newUserStage === undefined && <p>logged in?</p>}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {user, characters} = state;
    return {
        user: user,
        characters: characters
    }
}

export default withRouter(withCookies(connect(mapStateToProps)(Home)));