import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NewUser from './NewUser';

class Home extends Component {

    render() {
        return(
            <div>
                {this.props.userApp.newUserStage >= 1 && this.props.userApp.id && <NewUser />}
                {this.props.userApp.characters !== undefined && this.props.userApp.newUserStage === undefined && <p>logged in?</p>}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {userApp} = state;
    return {
        userApp: userApp
    }
}

export default withRouter(connect(mapStateToProps)(Home));