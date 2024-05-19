import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function AppButton({title}) {
    return (
        <View style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </View>
    ); 
}
        const styles = StyleSheet.create({
            button:{
                backgroundColor: '#006CE3',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 15,
                marginTop: 100,
                width: '100%'
            },
            text: {
                color: '#ffff',
                fontSize: 18,

            }
        
})

export default AppButton;