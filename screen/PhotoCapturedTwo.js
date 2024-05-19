import React from 'react';
import { Text, View, StyleSheet, Image, TextInput } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import AppButton from '../components/AppButton';

function PhotoCapturedTwo(props) {
    return (
        <>
        <View style={styles.container}>
        <View style={styles.arrowIcon}>
            <AntDesign name="arrowleft" size={20} color="white" />
            </View>
            <Text style={styles.text}>Photo Captured </Text>
        </View>
        <Image 
            resizeMode='cover' 
            style={styles.image}
            source={require("../assets/pexels-watorious-4025501.jpg")}  
        />
        <View style= {styles.input}>
        <TextInput 
        style= {styles.textarea}
        editable multiline= {true}
        placeholder='Add a Caption'
        numberOfLines={4}
        />
        <AppButton title= 'Share on Chat'/>
        </View>
        </>
        
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#003680',
        width: '100%',
        height: 100
    },
    image: {
        width: '100%',
        height: 330,
    
    },
    text: {
        color: '#ffff',
        fontWeight: 'bold',
        top: 48,
        left: 130
},
    arrowIcon: {
        left: 30,
        top: 70
            },
    textarea: {
       height: 100, 
       textAlignVertical: 'top',
       borderColor: "#A9A9",
       borderWidth: 1,
       borderRadius: 4,
       marginTop: 30,
       margin: 5,
       padding: 5
    },
input:{
    padding: 15

}
})

export default PhotoCapturedTwo;