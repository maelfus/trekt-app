import { createOauthFlow } from 'react-oauth-flow';

const { Sender, Receiver } = createOauthFlow({
  authorizeUrl: 'https://us.battle.net/oauth/authorize',
  tokenUrl: 'https://us.battle.net/oauth/token ',
  clientId: "clientid", //process.env.BNET_CLIENT_ID,
  clientSecret: "clientsecret", //process.env.BNET_CLIENT_SECRET,
  redirectUri: 'http://localhost:3000/auth/bnet',
});

export { Sender, Receiver };