import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import UserHomeStack from './stack/UserHomeStack';  
import HelpAndSupport from './HelpAndSupport';  
import Inspect from './Inspect';
import AnalyticsWeekly from './AnalyticsWeekly';
import Rating from './Rating';
import Icon from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();

// a drawer 
export default function UserPage() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen
        name="UserHomeStack"
        component={UserHomeStack}
        options={{ drawerLabel: () => null, title: null, drawerIcon: () => null }}
      />

      {/**the helpand support  */}
      <Drawer.Screen 
        name="HelpAndSupport" 
        component={HelpAndSupport} 
        options={({ navigation }) => ({
          title: 'Help & Support',
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerButton}>
              <Icon name="arrow-left" size={10} color="#fff" />
            </TouchableOpacity>
          ),
          headerStyle: { backgroundColor: '#00367F' },
          headerTintColor: '#fff'
        })} 
      />

    
      {/** Inspection */}
      <Drawer.Screen 
        name="Inspect" 
        component={Inspect} 
        options={({ navigation }) => ({
          headerShown: false,
          headerLeft: () => (
            <View style={styles.headerContainer}>
              <Image
                source={require('./assets/logo/frank.png')}
                style={styles.inspectionImg}
              />
              <Text style={styles.headerTitle}>Inspection</Text>
              <Text style={styles.headerText}>Inspection Info</Text>
            </View>
          ),
          headerStyle: { backgroundColor: '#00367F' },
          headerTintColor: '#fff'
        })}
      />


      {/**analytics  */}
      <Drawer.Screen 
        name="AnalyticsWeekly" 
        component={AnalyticsWeekly} 
        options={({ navigation }) => ({
          title: 'Analytics',
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerButton}>
              <Icon name="arrow-left" size={10} color="#fff" />
            </TouchableOpacity>
          ),
          headerStyle: { backgroundColor: '#00367F' },
          headerTintColor: '#fff'
        })}
      />

      {/**the rating  */}
      <Drawer.Screen 
        name="Rating" 
        component={Rating} 
        options={({ navigation }) => ({
          title: 'Rate Us',
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerButton}>
              <Icon name="arrow-left" size={10} color="#fff" />
            </TouchableOpacity>
          ),
          headerStyle: { backgroundColor: '#00367F' },
          headerTintColor: '#fff'
        })}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  headerButton: {
    marginLeft: 10,
    padding: 5,
  },
});
