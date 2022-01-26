import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'

const WeatherForm = (props) => {
  const {
    userName,
    accLink,
    today,
    city,
    temp,
    pressure,
    humidity,
    currentWeather
  } = props
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: 20,
      }}>
      <View style={styles.topInfoWrapper}>
        <View>
          <Text style={styles.usename}>{userName}</Text>
          <Text style={styles.acclink}>{accLink}</Text>
        </View>

        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.temparature}>
              {city}
            </Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.weatherType}>
              {today.toLocaleDateString()}
            </Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.weatherType}>
              {currentWeather[0]?.description}
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.weatherType}>
              {currentWeather[0]?.main}
            </Text>
          </View>
        </View>

      </View>

      <View
        style={{
          borderBottomColor: 'rgba(255,255,255,0.7)',
          marginTop: 20,
          borderBottomWidth: 1,
        }}
      />
      <View style={styles.bottomInfoWrapper}>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.infoText}>Pressure</Text>
          <Text style={[styles.infoText, { fontSize: 24 }]}>
            {pressure !== undefined ? pressure : ''}
          </Text>
          <Text style={styles.infoText}>%</Text>
          <View style={styles.infoBar}>
            <View
              style={{
                width: 2,
                height: 5,
                backgroundColor: '#69F0AE',
              }}
            />
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.infoText}>Temp (F)</Text>
          <Text style={[styles.infoText, { fontSize: 24 }]}>
            {temp !== undefined ? temp : ''}
          </Text>
          <Text style={styles.infoText}>%</Text>
          <View style={styles.infoBar}>
            <View
              style={{
                width: 2,
                height: 5,
                backgroundColor: '#F44336',
              }}
            />
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.infoText}>Humidity</Text>
          <Text style={[styles.infoText, { fontSize: 24 }]}>
            {humidity !== undefined ? humidity : ''}
          </Text>
          <Text style={styles.infoText}>%</Text>
          <View style={styles.infoBar}>
            <View
              style={{
                width: 2,
                height: 5,
                backgroundColor: '#F44336',
              }}
            />
          </View>
        </View>
      </View>

    </View>
  )
};

export default WeatherForm;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
 
  topInfoWrapper: {
    flex: 1,
    marginTop: 100,
    justifyContent: 'space-between',
  },
  usename: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
  },
  acclink: {
    color: '#fff',
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
  },

  temparature: {
    color: '#fff',
    fontFamily: 'Lato-Light',
    fontSize: 20,
  },
  weatherType: {
    color: '#fff',
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 34,
    marginLeft: 10,
  },
  bottomInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  infoText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
  },
  infoBar: {
    width: 45,
    height: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
});
