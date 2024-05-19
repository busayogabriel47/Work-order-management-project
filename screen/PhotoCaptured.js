import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

function PhotoCaptured(props) {
    return (
        <View style={styles.container}>
         <View style={styles.arrowIcon}>
            <AntDesign name="arrowleft" size={20} color="white" />
            </View>   
            
        <View style={styles.deleteIcon}>
        <AntDesign.Button  backgroundColor= 'none' name= 'delete' color='white' size={24} width={100}>Delete</AntDesign.Button>
        </View>
        <View style={styles.shareIcon}>
        <SimpleLineIcons.Button backgroundColor= 'none' name="share" size={24} color="white" width={100}>Send</SimpleLineIcons.Button>
        </View>
        <View>
       <Text style={styles.text}>Photo Captured</Text>
        <Image 
            resizeMode='contain' 
            style={styles.image}
            source={require("../assets/pexels-watorious-4025501.jpg")}
        />
        </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#003680',
        flex: 1
    },
    text: {
        color: '#ffff',
        left: 120,
        top: 50
    },
    arrowIcon: {
        left: 30,
        top: 70
            },
    deleteIcon: { 
        borderRadius: 4,
        borderColor: '#fff',
        borderWidth: 1,
        position: "absolute",
        bottom: 40,
        left: 70
    },
    shareIcon: {
        borderRadius: 4,
        borderColor: '#fff',
        borderWidth: 1,
        position: "absolute",
        bottom: 40,
        left: 200
    },
    image: {
        
        width: '100%',
        height: '90%' 
      }})

export default PhotoCaptured;