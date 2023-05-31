import CompletedScreen from '@/screens/completed-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeStackNavigator from './home-stack-navigator';
import { RootBottomTabParamList } from './types';

const Tab = createBottomTabNavigator<RootBottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeStack" component={HomeStackNavigator} />
      <Tab.Screen name="Completed" component={CompletedScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
