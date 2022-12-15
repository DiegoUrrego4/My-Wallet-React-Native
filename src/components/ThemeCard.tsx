import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {useFetch} from '../hooks/useFetch';
import {RootState} from '../redux/store/store';
import {changeThemeStyles} from '../theme/changeThemeTheme';

interface Props {
  imageUrl?: string;
  title: string;
  color?: string;
}

export const ThemeCard = ({title, color = 'red'}: Props) => {
  const {userData} = useSelector((state: RootState) => state.auth);
  const {email} = userData;
  const {data} = useFetch(`/clients/${email}`);
  const {
    app: {id},
  } = data;

  const changeAppColor = async () => {
    try {
      await fetch(`http://192.168.1.25:3000/api/v1/app/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({appColor: color}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  return (
    <TouchableOpacity
      style={changeThemeStyles.themeCard}
      onPress={changeAppColor}>
      <View style={{...styles.box, backgroundColor: color}} />
      <Text style={changeThemeStyles.cardText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 60,
    height: 60,
    marginVertical: 10,
  },
});
