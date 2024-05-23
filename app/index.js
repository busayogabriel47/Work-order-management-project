import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoadingPage() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process
    const timer = setTimeout(() => {
      setLoading(false);
      navigation.navigate('LoginPage');
    }, 3000); // 3 seconds

    // Clean up the timer
    return () => clearTimeout(timer);
  }, [navigation]);

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
      <Text style={{ fontSize: 10 }}>Elevate Maintenance Excellence</Text>

      {loading && (
        <ActivityIndicator size="large" color="#006CE3" style={styles.loader} />
      )}
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
  loader: {
    marginTop: 20,
  }
});
