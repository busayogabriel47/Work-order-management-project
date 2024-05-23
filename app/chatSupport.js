import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/FontAwesome';

export default function chatSupport() {
  return (
    <View style={styles.container}>
        {/**the blue bg backlground  */}
         <View style={styles.blueContainer}>
            <View style={styles.blueBgLeft}>
            <Icon style={styles.arrowIcon} name="arrow-left" size={10} color="#fff"  />
                <Text style={styles.blueBgText}>Team Chat</Text>
            </View>
            <View style={styles.blueBgRight}>
                <Icon style={styles.arrowIcon} name="search" size={10} color="#fff"  />
                <Icon style={styles.arrowIcon} name="bars" size={10} color="#fff"  />
            </View>
        </View>

        {/**the chat container */}
        <View style={styles.chatContainer}>

            {/**the date above the chat  */}
              <View style={styles.chatDate}>
                 <Text>Today, April 1 2024</Text>
              </View>
                 

                 {/**the chat */}
              <View style={styles.chatConversation}>
                <View style={styles.firstConvo}>
                 <View style={styles.chatContainer}>
                    <Text> FRANK FOSTER </Text>
                    <Text>
                        Lorem Ipsum is simply dummy text of the printing
                         and typesetting industry. Lorem Ipsum 
                    </Text>
                    </View>
                    <View>
                    <Image 
                    source={require('./assets/logo/frank.png')}
                    style={styles.logo}/>
                 </View>
                </View>
                <View style={styles.SecondConvo}>

                </View>
                <View style={styles.ThirdConvo}>

                </View>

              </View>
        </View>


        {/**send message belowe  */}

        <View style={styles.sendMesssage}>
        <View style={styles.messageContainer}>
        <Icon  name="photo" size={20} color="#000"  />

            <TextInput 
            style={styles.messageInput}
            placeholder='type your message '
            placeholderTextColor="#888"
            
            />

            <Icon  name="arrow-right" size={20} color="#000"  />
            <Text>goooooooood</Text> 
            <View>
            </View>
            </View>
        </View>
    </View>
  )
}



const styles = StyleSheet.create({
    //the container
    container:{
        backgroundColor: '#F2F2F2',
        justifyContent: "center",
        alignItems: "center"
      },
      //the blue bg 
      blueContainer:{
          width: '100%',
          height: 50,
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#00367F",
          flexDirection: 'row',
          padding: 10
          
      },
       // the icons in the blue bg 
       arrowIcon:{
       
    },
    blueBgLeft:{
        flexDirection: 'row',
        gap: 15
    },
    blueBgRight:{
        flexDirection: 'row',
        gap: 8
    },
    // the text in the blue bg 
    blueBgText:{
        color: '#fff',
    
    },
    chatContainer:{
      flex: 1,
      width: '100%'
,      backgroundColor: '#f2f2f2',
      justifyContent: 'center',
      alignItems: 'center'
    },
    chatDate:{
      backgroundColor: '#fff',
      width: 'auto',
      height: 'auto',
      borderRadius: 15,
      padding: 10
    },
    chatConversation:{
      width: '90%',
      backgroundColor: 'green',
      height: '30rem'
    },
    sendMesssage:{
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    messageContainer:{
      width: '90%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 50,
    },
    messageInput:{
        backgroundColor: '#f2f2f2',
        borderRadius: 5,
        width: '80%',
        height: 30,
        paddingLeft: 10
        
    },
    firstConvo: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: 'blue',
        
    },
    chatContainer:{
        flexDirection: 'column',
        backgroundColor: 'red',
        width: '15rem'
    }

})