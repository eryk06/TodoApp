import useUserGlobalStore from '@/store/useUserGlobalStore';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import AppStackNavigator from './app-stack-navigator';
import AuthStackNavigator from './auth-stack-navigator';

const Navigation = () => {
  const { user, updateUser } = useUserGlobalStore();

  console.log(`user: ${JSON.stringify(user, null, 2)}`);

  useEffect(() => {
    updateUser(null);
    return () => {};
  }, []);

  return (
    <NavigationContainer>
      {user ? <AppStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
