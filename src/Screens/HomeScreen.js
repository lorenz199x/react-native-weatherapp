import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, useWindowDimensions, Dimensions, StatusBar } from 'react-native'
import axios from 'axios';
import Auth0 from 'react-native-auth0';

import { AUTH0_DOMAIN, CLIENT_ID } from '../shared/utils/Enums'
import { debounce } from '../shared/utils/Helpers';
import SearchInput from '../shared/components/SearchInput';
import WeatherForm from '../shared/components/Weatherform';

const auth0 = new Auth0({
  domain: AUTH0_DOMAIN,
  clientId: CLIENT_ID,
});

const HomeScreen = (props) => {
  const { route, navigation } = props
  const { authToken } = route.params
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const [weather, setWeather] = useState([])
  const [search, setSearch] = useState('')
  const [profile, setProfile] = useState({})
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const city = weather.name
  const { temp, pressure, humidity } = weather.main !== undefined ? weather.main : ''
  const currentWeather = weather.weather !== undefined ? weather.weather : ''
  const { name, email } = profile

  useEffect(() => {
    getUserProfile()
  }, [])

  const getUserProfile = () => {
    auth0.auth
      .userInfo({ token: authToken })
      .then(result => setProfile(result))
      .catch('error', console.error);
  }

  const onLogout = () => {
    auth0.webAuth.clearSession().catch(error => console.log(error));
    navigation.navigate('LoginScreen')
  }

  const onSearch = (e, key) => {
    const text = e.nativeEvent.text
    if (key === 'Enter') {
      debounceSearch(text)
    }
  }

  const handleSearch = (value) => {
    getWeather(value)
  }

  const debounceSearch = debounce(handleSearch, 500, 0)

  const getWeather = async (query) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query},uk&APPID=7dc61b35bf026c5a070976879906957e`,
      );
      return setWeather(response.data)
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle='light-content' />
      <ScrollView
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ width: windowWidth, height: windowHeight }}>
          <ImageBackground
            source={require('../../assets/cloudy.jpeg')}
            style={styles.imageBg}>

            <View style={{ justifyContent: 'flex-end' ,flexDirection: 'row'}}>
              <TouchableOpacity onPress={onLogout} style={styles.appButton}>
                <Text style={styles.appBtnText}> Logout </Text>
              </TouchableOpacity>
            </View>

            <SearchInput
              searchPlaceHoder={"Search any city"}
              search={search}
              onSearchChange={(event) => setSearch(event.nativeEvent.text)}
              onSearch={(event) => { onSearch(event, 'Enter') }}
            />

            <WeatherForm
              userName={name}
              accLink={email}
              today={today}
              city={city}
              temp={temp}
              pressure={pressure}
              humidity={humidity}
              currentWeather={currentWeather}
            />
          </ImageBackground>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageBg: {
    flex: 1,
  },

  appButton: {
    elevation: 8,
    backgroundColor: '#161716',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: '30%',
  },

  appBtnText: {
    fontSize: 10,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  }

});

