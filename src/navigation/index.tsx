import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import AuthStackNavigator from './auth-stack-navigator';

const Navigation = () => {
  const user = true;

  return (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
