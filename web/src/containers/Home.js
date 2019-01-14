import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NewUser from './NewUser';

class Home extends Component {

    render() {
        return(
            <div>
                {this.props.userApp.userData == null && this.props.userApp.id && <NewUser />}
                {this.props.userApp.userData != null && <p>logged in?</p>}
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