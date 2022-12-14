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
import {
  setAppColor,
  setMovements,
  setUserData,
} from '../redux/slices/accountSlice';

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
      dispatch(startLogin());
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
  const {name, email, phone, picture} = userData;
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
    // Peticiones HTTP - Crear cliente
    try {
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

export const getAccountBalance = (clientEmail: string) => {
  console.log('CLIENT EMAIL', clientEmail);
  return async (dispatch: any) => {
    try {
      const resp = await fetch(
        `http://192.168.1.25:3000/api/v1/clients/${clientEmail}`,
      );
      const data = await resp.json();
      const {
        account: {balance, id: idOutcome, credit},
        app: {appColor},
      } = data;
      dispatch(setUserData({balance, id: idOutcome, credit, appColor}));
    } catch (error) {
      console.log('ERROR', error);
    }
  };
};

export const createMovement = (clientEmail: string, form: any) => {
  console.log('FORM', form);
  return async (dispatch: any) => {
    try {
      await fetch('http://192.168.1.25:3000/api/v1/movements', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      dispatch(getAccountBalance(clientEmail));
    } catch (error: any) {
      throw Error(error.message);
    }
  };
};

export const getAccountMovements = (accountId: string) => {
  return async (dispatch: any) => {
    try {
      const resp = await fetch(
        `http://192.168.1.25:3000/api/v1/account/${accountId}/pictures`,
      );
      const data = await resp.json();
      const {incomes, outcomes} = data;
      console.log('incomes THUNK', incomes);
      console.log('outcomes THUNK', outcomes);
      dispatch(setMovements({incomes, outcomes}));
    } catch (error) {
      console.log('ERROR', error);
    }
  };
};

export const changeAppTheme = (appId: string, color: string) => {
  return async (dispatch: any) => {
    try {
      await fetch(`http://192.168.1.25:3000/api/v1/app/${appId}`, {
        method: 'PATCH',
        body: JSON.stringify({appColor: color}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      dispatch(setAppColor({appColor: color}));
    } catch (error) {
      console.log('ERROR', error);
    }
  };
};
