import Auth0 from 'react-native-auth0';
import Config from '../config';

const auth = new Auth0({
  clientId: Config.AUTH0_CLIENT_ID,
  domain: Config.AUTH0_DOMAIN,
});

export const CONNECTION = 'Username-Password-Authentication';
export const AUDIENCE = `https://${Config.AUTH0_DOMAIN}/api/v2`;

export default auth;
