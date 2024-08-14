import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function HelpAndSupport() {
    const navigation = useNavigation();

    const handleNavigate = (screen) => {
        navigation.navigate(screen);
    }

    return (
        <View style={styles.container}>
            {/* the container for the list */}
            <View style={styles.otherContainer}> 
                {/* the contact box */}
                <View style={styles.contactBox}>
                    {/* the email */}
                    <TouchableOpacity style={styles.contactOption} onPress={() => handleNavigate('chatSupport')}>
                        <View style={styles.contactCircle}>
                            <Icon style={styles.contactIcon} name="envelope" size={20} color="#fff"  />
                        </View>
                        <Text>Email</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.contactOption} onPress={() => handleNavigate('CallScreen')}>
                        <View style={styles.contactCircle}>
                            <Icon style={styles.contactIcon} name="phone" size={20} color="#fff"  />
                        </View>
                        <Text>Call Us</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.contactOption} onPress={() => handleNavigate('ChatScreen')}>
                        <View style={styles.contactCircle}>
                            <Icon style={styles.contactIcon} name="comment" size={20} color="#fff"  />
                        </View>
                        <Text>Chat</Text>
                    </TouchableOpacity>
                </View>

                {/* the helplist boxes */}
                <View style={styles.helpList}>
                    <View style={styles.helplistCircle}>
                        <Icon name="book" size={20} color="#fff" />
                    </View>
                    <View>
                        <Text style={styles.helplistHeading}> Demo & Sample Pdf</Text>
                        <Text> see sample pdf work order</Text>
                    </View>
                </View>
                <View style={styles.helpList}>
                    <View style={styles.helplistCircle}>
                        <Icon name="question" size={20} color="#fff" />
                    </View>
                    <View>
                        <Text style={styles.helplistHeading}> FAQS</Text>
                        <Text> find your qa regarding app</Text>
                    </View>
                </View>
                <View style={styles.helpList}>
                    <View style={styles.helplistCircle}>
                        <Icon name="book" size={20} color="#fff" />
                    </View>
                    <View>
                        <Text style={styles.helplistHeading}> Articles</Text>
                        <Text> see sample pdf work order</Text>
                    </View>
                </View>
                <View style={styles.helpList}>
                    <View style={styles.helplistCircle}>
                        <Icon name="play" size={20} color="#fff" />
                    </View>
                    <View>
                        <Text style={styles.helplistHeading}> Video guide</Text>
                        <Text> see sample pdf work order</Text>
                    </View>
                </View>
                <View style={styles.helpList}>
                    <View style={styles.helplistCircle}>
                        <Icon name="mobile" size={20} color="#fff" />
                    </View>
                    <View>
                        <Text style={styles.helplistHeading}> App guide</Text>
                        <Text> see sample pdf work order</Text>
                    </View>
                </View>
                <View style={styles.helpList}>
                    <View style={styles.helplistCircle}>
                        <Icon name="mobile" size={20} color="#fff" />
                    </View>
                    <View>
                        <Text style={styles.helplistHeading}> App overview </Text>
                        <Text> see sample pdf work order</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2F2F2',
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    blueContainer: {
        width: '100%',
        height: 50,
        justifyContent: "start",
        alignItems: "center",
        backgroundColor: "#00367F",
        flexDirection: 'row',
        paddingLeft: 10
    },
    arrowIcon: {
        marginRight: 50,
    },
    blueBgText: {
        color: '#fff',
    },
    otherContainer: {
        width: '90%',
        backgroundColor: '#f2f2f2',
        flex: 1
    },
    contactBox: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        marginTop: 20,
        backgroundColor: '#f2f2f2',
    },
    contactOption: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 1,
    },
    contactCircle: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: '#006CE3',
        justifyContent: 'center',
        alignItems: 'center'
    },
    helpList: {
        height: 60,
        backgroundColor: "white",
        width: '100%',
        marginTop: 10,
        justifyContent: 'start',
        alignItems: 'center',
        flexDirection: 'row'
    },
    helplistCircle: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: '#006CE3',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    helplistHeading: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    nextPageButton: {
        backgroundColor: '#016BDC',
        paddingVertical: 10,
        alignItems: 'center',
    }
});
