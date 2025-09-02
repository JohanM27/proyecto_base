import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import {Text} from 'react-native';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Registro from './src/screens/Registro';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
     <NavigationContainer>
        <Stack.Navigator initialRouteName='LoginScreen'>
              <Stack.Screen name='LoginScreen' component={Login} />
              <Stack.Screen name='HomeScreen' component={Home} />
              <Stack.Screen name='RegistroScreen' component={Registro} />
            </Stack.Navigator>
     </NavigationContainer>
  );
};

