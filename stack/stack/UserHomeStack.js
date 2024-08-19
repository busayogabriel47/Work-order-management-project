// UserHomeStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import UserHome from '../UserHome';  
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

function UserHomeScreen() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen  screenOptions={{ headerShown: false }}
        name="UserProfile"
        component={UserHome}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon name="bars" size={24} style={{ marginLeft: 15 }} />
            </TouchableOpacity>
          ),
          
        }}
      />
    </Stack.Navigator>
  );
}

export default UserHomeScreen;
