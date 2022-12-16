import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {useFetch} from '../hooks/useFetch';
import {RootState} from '../redux/store/store';
import {changeThemeStyles} from '../theme/changeThemeTheme';
import {useAppDispatch} from '../hooks/hooks';
import {changeAppTheme} from '../hooks';

interface Props {
  imageUrl?: string;
  title: string;
  color?: string;
}

export const ThemeCard = ({title, color = 'red'}: Props) => {
  const dispatch = useAppDispatch();
  const {
    userData: {email},
  } = useSelector((state: RootState) => state.auth);
  // const {email} = userData;
  const {data} = useFetch(`/clients/${email}`);
  const {
    app: {id},
  } = data;

  const handleAppColor = () => {
    dispatch(changeAppTheme(id, color));
  };

  return (
    <TouchableOpacity
      style={changeThemeStyles.themeCard}
      onPress={handleAppColor}>
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
