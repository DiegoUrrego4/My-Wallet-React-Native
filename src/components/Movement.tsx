import React from 'react';
import {View, Text, Image} from 'react-native';
import {accountStyles} from '../theme/accountScreenTheme';

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
        style={{
          ...accountStyles.movementAmmount,
          color: typeOfMovement === 'income' ? 'green' : 'red',
        }}>
        $ {quantity}
      </Text>
    </View>
  );
};
