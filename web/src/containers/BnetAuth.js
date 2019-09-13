import React, { Component } from 'react';
import { OauthReceiver } from 'react-oauth-flow';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { withCookies } from 'react-cookie';
import { getUserData, bnetLogIn } from '../redux/actions'

class BnetAuth extends Component {

    handleSuccess = async (accessToken, { response, state }) => {

        await this.props.dispatch(bnetLogIn(accessToken));

        // Pull userData from the db if it exists
        await this.props.dispatch(getUserData(this.props.user.id));

        // Return to the most recent page
        this.props.history.push(state.from)

    };

    handleError = error => {
        console.error('An error occurred');
        console.error(error.message);
    };

    render () {
        return (
            <OauthReceiver
                tokenUrl="https://us.battle.net/oauth/token"
                clientId={process.env.REACT_APP_BNET_CLIENT_ID}
                clientSecret={process.env.REACT_APP_BNET_CLIENT_SECRET}
                redirectUri="https://localhost:3000/auth/bnet"
                onAuthSuccess={this.handleSuccess}
                onAuthError={this.handleError}
                render={({ processing, state, error }) => (
                    <div>
                        {processing && <p>Authorizing now...</p>}
                        {error && (
                        <p className="error">An error occurred: {error.message}</p>
                        )}
                    </div>
                )}
            />
        );
    }
}

const mapStateToProps = (state) => {
    const {user} = state;
    return {
        user: user
    }
}

export default withRouter(withCookies(connect(mapStateToProps)(BnetAuth)));