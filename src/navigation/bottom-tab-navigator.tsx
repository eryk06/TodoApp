import CompletedScreen from '@/screens/completed-screen';
import TodayScreen from '@/screens/today-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import CategoriesStackNavigator from './categories-stack-navigator';
import HomeStackNavigator from './home-stack-navigator';
import { RootBottomTabParamList } from './types';

const Tab = createBottomTabNavigator<RootBottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeStack" component={HomeStackNavigator} />
      <Tab.Screen name="Completed" component={CompletedScreen} />
      <Tab.Screen name="Today" component={TodayScreen} />
      <Tab.Screen name="CategoriesStack" component={CategoriesStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
