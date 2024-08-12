import { View, Text, Image, StyleSheet, 
    ImageBackground, TextInput, TouchableOpacity} from 'react-native'
    
    import React, { useState } from 'react';
    
    import Icon from 'react-native-vector-icons/FontAwesome';
    import { useNavigation } from '@react-navigation/native';
    
    export default function SignUp() {
      
      const navigation = useNavigation();
    
      const [text, setText] = useState('');
    
      const [password, setPassword] = useState('');
      const [hidePassword, setHidePassword] = useState(true);
    
      const togglePasswordVisibility = () => {
        setHidePassword(!hidePassword);
      };
    
    
     
      const handleSignIn = () => {
        
        navigation.navigate('LoginPage'); 
        };

        const handleLoginPress = () => {
          navigation.navigate('LoginPage');
        };
    
    
    
      return (
        // the login page 
        <View style={styles.container}>
    
          {/**the img bg on the login screen with the logo  */}
          <ImageBackground
           source={require('./assets/logo/image1.png')}
           style={styles.imgBg}
           resizeMode="cover">
           <Image
            source={require('./assets/logo/Frame40.png')}>
           </Image>
           </ImageBackground>
    
           {/** the welcome text */}
          <View style={styles.loginForm}>
          <Text style={{  color: '#006CE3', fontSize: 30, 
          fontWeight: 'bold', marginVertical: 5 }}>
            welcome
           </Text>
           <Text style={{marginVertical: 10}}>
           create an account
           </Text>
    
           {/**the user input  */}
           <View style={styles.inputContainer}>
              <Icon name="user" size={24} color="#888" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#888"
                onChangeText={setText}
                value={text}
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon name="envelope" size={24} color="#888" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#888"
                onChangeText={setText}
                value={text}
              />
            </View>
    
    
    
            {/**the password input */}
            <View style={styles.inputContainer}>
            {/* Left Icon */}
            <Icon name="lock" size={24} color="#888" style={styles.icon} />
            {/* Password TextInput */}
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#888"
              secureTextEntry={hidePassword} // Toggle password visibility
              onChangeText={setPassword}
              value={password}
            />
            {/* Right Icon (Eye) */}
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Icon
                name={hidePassword ? 'eye-slash' : 'eye'}
                size={24}
                color="#888"
                style={styles.icon}
              />
            </TouchableOpacity>
    
          </View>
    
           {/**tje signin button */}
          <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
              <Text style={styles.signInButtonText}>Sign up</Text>
            </TouchableOpacity>
     
    
            {/**the login  link */}
            <View style={styles.loginLinkContainer}>
          <Text style={styles.loginLink}>
            Owned an account? 
          </Text>
          <TouchableOpacity onPress={handleLoginPress}>
            <Text style={styles.loginLinkText}> login here</Text>
          </TouchableOpacity>
        </View>
          </View>
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
      // the bg img styling 
      imgBg:{
        width:"100%",
        height: 300,
        backgroundColor: "#016BDC",
        justifyContent: "center",
        alignItems: 'center',
      },
    
    
      // the login form 
      loginForm:{
        width: "80%",
        marginTop: 20,
      },
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#888',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        marginTop: 10
      },
      icon: {
        marginRight: 10,
      },
      input: {
        flex: 1,
        height: 40,
        color: '#000',
      },
      signInButton: {
        backgroundColor: '#016BDC',
        paddingVertical: 10,
        alignItems: 'center',
      },
      signInButtonText: {
        color: '#fff',
        fontSize: 16,
      },
      
      loginLinkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
      },
      loginLinkText: {
        color: '#006CE3',
      },
    
    })