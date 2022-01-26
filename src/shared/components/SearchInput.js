import React, {useState} from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const SearchInput = (props) => {
  let { searchPlaceHoder, search, onSearchChange, onSearch} = props;

  return (
    <View style={styles.container}>
      <TextInput
        value={search}
        autoCorrect={false}
        placeholder={searchPlaceHoder}
        placeholderTextColor="white"
        underlineColorAndroid="transparent"
        style={styles.textInput}
        clearButtonMode="always" // only available on IOS
        onChange={onSearchChange}
        onSubmitEditing={onSearch}
      />
    </View>
  );
}

export default SearchInput;

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    color: 'white',
  },
  container: {
    height: 40,
    width: 300,
    marginTop: 20,
    backgroundColor: '#666',
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
  }
});

