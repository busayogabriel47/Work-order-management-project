import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';


export default function SideMenu() {
    const navigation = useNavigation();

    const handleSignIn = () => {
    
        navigation.navigate('HelpAndSupport'); 
        };
    
  return (
    <View>
      <TouchableOpacity style={styles.nextPageButton}  onPress={handleSignIn}>
          <Text >next page</Text>
        </TouchableOpacity>
 
    </View>
  )
}

const styles = StyleSheet.create({
    // the is the styling of the login page
    container:{
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center"
    },
    
})