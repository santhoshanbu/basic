
import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Style from './style';
import Login from './components/login/login';
import Head from './components/header';
import Main from './components/container';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <View style={Style.grid}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Head} options={{ title: 'welcome' }} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  )
}

export default App;
