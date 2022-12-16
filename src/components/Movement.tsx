import React from 'react';
import {View, Text, Image} from 'react-native';
import {accountStyles} from '../theme/accountScreenTheme';
import currencyFormatter from 'currency-formatter';

interface Props {
  imageUrl: string;
  movementFor: string;
  date: string;
  quantity: string;
  typeOfMovement: 'income' | 'outcome';
}

export const Movement = ({
  imageUrl,
  movementFor,
  date,
  quantity,
  typeOfMovement,
}: Props) => {
  return (
    <View style={accountStyles.componentMovement}>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={accountStyles.movementImage}
      />
      <View>
        <Text style={accountStyles.movementText}>{movementFor}</Text>
        <Text style={accountStyles.movementDate}>{date}</Text>
      </View>
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...accountStyles.movementAmmount,
          color: typeOfMovement === 'income' ? 'green' : 'red',
        }}>
        {currencyFormatter.format(Number(quantity), {code: 'COP'})}
      </Text>
    </View>
  );
};
