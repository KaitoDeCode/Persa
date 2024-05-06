import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './components/screens';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='login'>
        <Stack.Screen
        name='login'
        component={LoginScreen}
        options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}