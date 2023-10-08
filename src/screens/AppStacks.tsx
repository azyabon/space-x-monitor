import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import RocketsScreen from './RocketsScreen';
import {LAUNCHES_SCREEN, ROCKETS_SCREEN} from '../constants/routes';
import LaunchesScreen from './LaunchesScreen';

export default function AppStacks() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ROCKETS_SCREEN}
          component={RocketsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={LAUNCHES_SCREEN}
          component={LaunchesScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
