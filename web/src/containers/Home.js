import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NewUser from './NewUser';

class Home extends Component {

    render() {
        return(
            <div>
                {this.props.user.newUserStage >= 1 && this.props.user.id && <NewUser />}
                {this.props.user.characters !== undefined && this.props.user.newUserStage === undefined && <p>logged in?</p>}
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

export default withRouter(connect(mapStateToProps)(Home));