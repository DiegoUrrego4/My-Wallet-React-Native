import Auth0 from 'react-native-auth0';
import Config from '../config';

const auth = new Auth0({
  clientId: Config.AUTH0_CLIENT_ID,
  domain: Config.AUTH0_DOMAIN,
});

export default auth;
