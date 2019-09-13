import React, { Component } from 'react';
import { OauthSender }  from 'react-oauth-flow'

export default class Login extends Component {
    render() {
        return (
            <div>
                <OauthSender
                    authorizeUrl="https://us.battle.net/oauth/authorize"
                    clientId={process.env.REACT_APP_BNET_CLIENT_ID}
                    redirectUri="https://localhost:3000/auth/bnet"
                    state={{ from: '/' }}
                    args={{ response_type: 'code', scope: 'wow.profile' }}
                    render={({ url }) => <a href={url}>Login</a>}
                />
            </div>
        );
    }
}