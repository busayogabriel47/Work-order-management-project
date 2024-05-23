import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


export default function HelpAndSupport() {
    const navigation = useNavigation();

    const handleSignIn = () => {
    
        navigation.navigate('AnalyticsToday'); 
        };


  return (
    // the help and support page 
    <View style={styles.container}>
        {/**the blue bg at the top  */}
      <View style={styles.blueContainer}>
      <Icon style={styles.arrowIcon} name="arrow-right" size={10} color="#fff"  />
        <Text style={styles.blueBgText}>Help and Support</Text>
        </View>

        {/**the container for the list */}
        <View style={styles.otherContainer}> 
            {/**the contact box */}
            <View style={styles.contactBox}>
                {/** the email */}
                <View style={styles.contactOption}>
                    {/* The circle in the contact option */}
                    <View style={styles.contactCircle}>
                    <Icon style={styles.contactIcon} name="envelope" size={20} color="#fff"  />
                    </View>
                    <Text>Email</Text>
                </View>

                <View style={styles.contactOption}>
                    {/* The circle in the contact option */}
                    <View style={styles.contactCircle}>
                    <Icon style={styles.contactIcon} name="phone" size={20} color="#fff"  />
                    </View>
                    <Text>Call Us</Text>
                </View>

                <View style={styles.contactOption}>
                    {/* The circle in the contact option */}
                    <View style={styles.contactCircle}>
                    <Icon style={styles.contactIcon} name="comment" size={20} color="#fff"  />
                    </View>
                    <Text>Chat</Text>
                </View>
            </View>

            {/**the helplist boxes */}
            <View style={styles.helpList}>
                <View style={styles.helplistCircle}>
                <Icon  name="book" size={20} color="#fff"  />
                </View>
                <View>
                    <Text style={styles.helplistHeading}> Demo & Sample Pdf</Text>
                    <Text> see sample pdf work order</Text>
                </View>
            </View>
            <View style={styles.helpList}>
            <View style={styles.helplistCircle}>
                <Icon  name="question" size={20} color="#fff"  />
                </View>
                <View>
                    <Text style={styles.helplistHeading}> FAQS</Text>
                    <Text> find your qa regarding app</Text>
                </View>
            </View>
            <View style={styles.helpList}>
            <View style={styles.helplistCircle}>
                <Icon  name="book" size={20} color="#fff"  />
                </View>
                <View>
                    <Text style={styles.helplistHeading}> Articles</Text>
                    <Text> see sample pdf work order</Text>
                </View>
            </View>
            <View style={styles.helpList}>
            <View style={styles.helplistCircle}>
                <Icon  name="play" size={20} color="#fff"  />
                </View>
                <View>
                    <Text style={styles.helplistHeading}> Video guide</Text>
                    <Text> see sample pdf work order</Text>
                </View>
            </View>
            <View style={styles.helpList}>
            <View style={styles.helplistCircle}>
                <Icon  name="mobile" size={20} color="#fff"  />
                </View>
                <View>
                    <Text style={styles.helplistHeading}> App guide</Text>
                    <Text> see sample pdf work order</Text>
                </View>
            </View>
            <View style={styles.helpList}>
            <View style={styles.helplistCircle}>
                <Icon  name="mobile" size={20} color="#fff"  />
                </View>
                <View>
                    <Text style={styles.helplistHeading}> App overview </Text>
                    <Text> see sample pdf work order</Text>
                </View>
            </View>
        </View>


        <TouchableOpacity style={styles.nextPageButton}  onPress={handleSignIn}>
          <Text >next page</Text>
        </TouchableOpacity>
    </View>
  )
}




const styles = StyleSheet.create({
    //the container
    container:{
      backgroundColor: '#F2F2F2',
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    //the blue bg 
    blueContainer:{
        width: '100%',
        height: 50,
        justifyContent: "start",
        alignItems: "center",
        backgroundColor: "#00367F",
        flexDirection: 'row',
        paddingLeft: 10
        
    },
    // the arroe in the blue bg 
    arrowIcon:{
        marginRight: 50,
    },
    // the text in the blue bg 
    blueBgText:{
        color: '#fff',

    },

    // the continer for the other list boxes 
    otherContainer:{
        width: '90%',
        backgroundColor: '#f2f2f2',
        flex: 1
    },
    // the thyling for the contacts 
    contactBox: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        marginTop: 20,
        backgroundColor: '#f2f2f2',
      },
      // the styling for the email,chat us and call box
      contactOption: {
        flex: 1,
       backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 1,
      },
    // the circle in the contact option 
    contactCircle:{
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: '#006CE3',
        justifyContent: 'center',
        alignItems: 'center'
    },// the help list styling 
    helpList: {
    height: 60,
    backgroundColor: "white",
    width: '100%',
    marginTop: 10,
    justifyContent: 'start',
    alignItems: 'center',
    flexDirection: 'row'
    },
    helplistCircle:{
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: '#006CE3',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    helplistHeading:{
        fontSize: 15,
        fontWeight: 'bold',
    },
    nextPageButton: {
        backgroundColor: '#016BDC',
        paddingVertical: 10,
        alignItems: 'center',
      }
})