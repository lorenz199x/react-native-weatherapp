import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'

const DetailsScreen = () => {
  return (
    <View styles={styles.container}>
      <Text> Details </Text>
    </View>
  )
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
