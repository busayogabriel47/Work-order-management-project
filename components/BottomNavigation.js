// components/BottomNavigation.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Svg, { Path } from 'react-native-svg';

const BottomNavigation = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <Svg height="60" width="100%" style={styles.curve}>
        <Path
          d="M0,0 C150,60 300,0 450,0 L450,60 L0,60 Z"
          fill="white"
          stroke="#ccc"
          strokeWidth="1"
        />
      </Svg>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Icon name="folder" size={18} color="#333" />
          <Text style={styles.buttonText}>Work Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Asset')}>
          <Icon name="compass" size={18} color="#333" />
          <Text style={styles.buttonText}>Assets</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.hamburgerButton} onPress={() => navigation.openDrawer()}>
          <Icon name="menu" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ServiceScheldue')}>
          <Icon name="calendar" size={18} color="#333" />
          <Text style={styles.buttonText}>Schedule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Inventory')}>
          <Icon name="archive" size={18} color="#333" />
          <Text style={styles.buttonText}>Inventory</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  curve: {
    position: 'absolute',
    top: -1, // Adjust to make the curve seamless with the background
    
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    height: 60,
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  hamburgerButton: {
    position: 'absolute',
    top: -20,
    left: '45%',
    width: 50,
    height: 50,
    backgroundColor: '#f2f2f2',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Adds a shadow for better visibility
  },
  buttonText: {
    fontSize: 10,
    color: '#333',
  },
});

export default BottomNavigation;
