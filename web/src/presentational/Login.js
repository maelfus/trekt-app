import React, { Component } from 'react';
import { OauthSender }  from 'react-oauth-flow'

export default class Login extends Component {
    render() {
        return (
            <div>
                <OauthSender
                    authorizeUrl="https://us.battle.net/oauth/authorize"
                    clientId={process.env.BNET_CLIENT_ID}
                    redirectUri="http://localhost:3000/auth/bnet"
                    state={{ from: '/' }}
                    render={({ url }) => <a href={url}>Login</a>}
                />
            </div>
        );
    }
}