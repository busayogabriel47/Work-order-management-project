

import React from 'react';
import { TouchableOpacity,View, Text, StyleSheet } from 'react-native';

const AddBtn = ({ onPress, caption }) => {
 return (
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
    <View style={styles.buttonContainer}>
    <Text>{caption}</Text>
    </View>
    </TouchableOpacity>
 )

}

const styles = StyleSheet.create({
    touchable: {
        position: 'absolute',
        bottom: 50,  
        right: 20,  
      },
    buttonContainer: {
        width: 50,
        height: 50,
        backgroundColor: 'blue',
        justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25, 
        
    }
})

export default AddBtn