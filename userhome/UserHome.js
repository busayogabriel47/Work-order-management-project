import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function UserHome() {
  return (
    <View style={styles.container}>
    <Image 
      source={require('./assets/logo/Logo.png')}
      style={styles.logo}
    />
    <Text style={{ fontSize: 40, fontWeight: 'bold' }}>
      <Text>Tech</Text>
      <Text style={{ color: '#006CE3' }}>Aid</Text>
    </Text>
    <Text style={{ fontSize: 50 }}>User profile</Text>

    
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: 'center'
  },
  logo: {
    marginBottom: 20,
  },
});

