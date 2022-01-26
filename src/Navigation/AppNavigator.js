import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen'
import HomeScreen from '../Screens/HomeScreen'
import DetailsScreen from '../Screens/DetailsScreen'

const RootStack = createNativeStackNavigator()

const RootStackScreen = ({ navigation }) => (
  <NavigationContainer>
    <RootStack.Navigator>
      <RootStack.Screen
        name='LoginScreen'
        component={LoginScreen}
        options={{
          headerShown: false
        }}
      />
      <RootStack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          headerShown: false
        }}
      />
      <RootStack.Screen
        name='DetailsScreen'
        component={DetailsScreen}
        options={{
          headerShown: false
        }}
      />
    </RootStack.Navigator>
  </NavigationContainer>

)

export default RootStackScreen