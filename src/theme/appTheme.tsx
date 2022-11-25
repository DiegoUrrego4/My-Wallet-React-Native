import {StyleSheet} from 'react-native';

export const colors = {
  appColor: '#007aff',
  appTextColor: '#FFF',
  datesColor: '#989898',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  viewBotones: {
    flexDirection: 'row',
  },
  botonGrande: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  botonGrandeTexto: {
    color: 'white',
  },
});
