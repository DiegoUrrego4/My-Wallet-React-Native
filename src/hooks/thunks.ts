// import {Auth0} from '../modules';
import Auth0 from 'react-native-auth0';
import SInfo from 'react-native-sensitive-info';
import jwtDecode from 'jwt-decode';
import {setLogin, setLogout, startLogin} from '../redux/slices/authSlice';

const auth0 = new Auth0({
  domain: 'dev-gsziwkfju7op66gz.us.auth0.com',
  clientId: 'n7ppQ2UQlYlV7m6XrKyO4Fy8GapGwGVO',
});

const getUserData = async (id?: string) => {
  // Saco el token del SInfo, algo que deberíamos cambiar por el Redux
  const idToken = id ? id : await SInfo.getItem('idToken', {});
  console.log('idToken :>> ', idToken);
  // Decodifico el token (JWT)
  const {name, picture, exp} = jwtDecode<any>(idToken);
  const data = jwtDecode<any>(idToken);
  console.log('data JWT', JSON.stringify(data, null, 2));

  if (exp < Date.now() / 1000) {
    throw new Error('ID token expired!');
  }

  return {
    name,
    picture,
  };
};

export const getCredentials = () => {
  return async (dispatch: any) => {
    try {
      const credentials = await auth0.webAuth.authorize({
        scope: 'openid email profile',
      });
      await SInfo.setItem('idToken', credentials.idToken, {});
      const user_data = await getUserData(credentials.idToken);
      dispatch(startLogin());
      dispatch(setLogin({name: user_data.name, picture: user_data.picture}));
      // console.log('user_data :>> ', user_data);
    } catch (error) {
      console.log('ERROR', error);
    }
  };
};

export const deleteCredentials = () => {
  return async (dispatch: any) => {
    try {
      await auth0.webAuth.clearSession();
      await SInfo.deleteItem('idToken', {});
      dispatch(startLogin());
      dispatch(setLogout());
    } catch (error) {
      console.log('ERROR', error);
    }
  };
};
