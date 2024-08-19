
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Inspect from '../Inspect';
import Rating from '../Rating';

const Stack = createStackNavigator();

const InspectStack = () => {
  return (
    <Stack.Navigator initialRouteName="Inspect">
      <Stack.Screen name="Inspect" component={Inspect} />
      <Stack.Screen name="Rating" component={Rating} />
    </Stack.Navigator>
  );
};

export default InspectStack;
