import React, { Component } from 'react';
import { OauthReceiver } from 'react-oauth-flow';

class BnetAuth extends Component {
    handleSuccess = async () => {

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
                redirectUri="http://localhost:3000/auth/bnet"
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

export default BnetAuth;