// import {Auth0} from '../modules';
import Auth0 from 'react-native-auth0';
import SInfo from 'react-native-sensitive-info';
import jwtDecode from 'jwt-decode';
import {
  setAuth,
  setLogin,
  setLogout,
  setRegister,
  startLogin,
  UserData,
} from '../redux/slices/authSlice';
// import {useFetch} from './useFetch';

const auth0 = new Auth0({
  domain: 'dev-gsziwkfju7op66gz.us.auth0.com',
  clientId: 'n7ppQ2UQlYlV7m6XrKyO4Fy8GapGwGVO',
});
const baseURL = 'http://192.168.1.25:3000/api/v1';

const getUserData = async (id?: string) => {
  // Saco el token del SInfo, algo que deberíamos cambiar por el Redux
  const idToken = id ? id : await SInfo.getItem('idToken', {});
  console.log('idToken :>> ', idToken);
  // Decodifico el token (JWT)
  const {name, picture, exp, email} = jwtDecode<any>(idToken);
  const data = jwtDecode<any>(idToken);
  console.log('data JWT', JSON.stringify(data, null, 2));

  if (exp < Date.now() / 1000) {
    throw new Error('ID token expired!');
  }

  return {
    fullName: name,
    photo: picture,
    email,
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
      // const clientComplete = {...user_data, phone: '1234567890'};
      dispatch(startLogin());
      console.log('user_data THUNK :>> ', user_data);
      dispatch(
        setLogin({
          name: user_data.fullName,
          picture: user_data.photo,
          email: user_data.email,
        }),
      );
      dispatch(setAuth());
      // TODO: Peticiones HTTP
      // Buscar si el usuario existe
      const clientExist = await findDBClient(user_data.email);
      console.log('clientExist', clientExist);

      if (clientExist) {
        dispatch(setRegister(true));
      }
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
      // dispatch(startLogin());
      dispatch(setLogout());
    } catch (error) {
      console.log('ERROR', error);
    }
  };
};

const findDBClient = async (clientEmail: string) => {
  try {
    const resp = await fetch(`${baseURL}/clients/${clientEmail}`);
    const data = await resp.json();
    if (data.message) {
      return false;
    } else {
      return true;
    }
  } catch (error) {
    console.log('Error', error);
  }
};

export const createClient = (userData: UserData) => {
  console.log('createClient disparado!');
  const {name, email, phone, picture} = userData;
  console.log('userData - createClient', userData);
  return async (dispatch: any) => {
    // try {
    dispatch(
      setLogin({
        name,
        email,
        phone,
        picture,
      }),
    );
    // dispatch(setAuth());
    // TODO: Peticiones HTTP - Crear cliente
    try {
      console.log('ENTRANDO A TRY de CREACIÓN');
      console.log('baseURL', baseURL);
      console.log('baseURL', baseURL);
      await fetch(`${baseURL}/clients/signup`, {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      dispatch(setRegister(true));
    } catch (error) {
      console.log(error);
    }
  };
};
