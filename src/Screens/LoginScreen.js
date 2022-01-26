import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, StatusBar, ScrollView, TouchableOpacity } from 'react-native'

import Auth0 from 'react-native-auth0';
import { AUTH0_DOMAIN, CLIENT_ID } from '../shared/utils/Enums'

const auth0 = new Auth0({
  domain: AUTH0_DOMAIN,
  clientId: CLIENT_ID,
});

const LoginScreen = (props) => {
  const { navigation } = props
  const [accessToken, setAccessToken] = useState(null)

  const onLogin = async () => {
    try {
      let credentials = await auth0
        .webAuth
        .authorize({ scope: 'openid profile email' });
      setAccessToken(credentials.accessToken);
      navigation.navigate('HomeScreen', { authToken: credentials.accessToken })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ImageBackground
      source={require('../../assets/rainy.jpg')}
      style={styles.imageBg}>
      <TouchableOpacity onPress={onLogin} style={styles.appButton}>
        <Text style={styles.appBtnText}> Login </Text>
      </TouchableOpacity>
    </ImageBackground>
  )
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageBg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  sectionContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  appButton: {
    elevation: 8,
    backgroundColor: '#161716',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: '50%',
  },

  appBtnText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  }
});
