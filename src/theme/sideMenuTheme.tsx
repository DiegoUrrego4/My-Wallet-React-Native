import {StyleSheet} from 'react-native';

export const sideMenuStyles = StyleSheet.create({
  userOptionsContainer: {
    flex: 2,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 20,
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  menuButton: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  menuIcon: {
    marginRight: 40,
  },
  menuText: {
    fontSize: 20,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  appLogo: {
    marginVertical: 20,
  },
});
