import {AUDIENCE, Auth0} from '../modules';
import {CONNECTION} from '../modules/auth0';

export const useAuth = () => {
  // const {toke, isLoggedIn, savetoken, logout} = usecontext(AuthContext)

  const webLogin = async () => {
    try {
      const credentials = await Auth0.webAuth.authorize({
        audience: AUDIENCE,
        connection: CONNECTION,
      });
      //   const {accessToken} = credentials;
      //   SaveToken(accesstoken, LoginMethos.web)
    } catch (error) {}
  };

  //   return {
  //     isLoggedIn,
  //   token
  //   }
};
