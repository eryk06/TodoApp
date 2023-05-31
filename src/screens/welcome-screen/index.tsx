import { AuthScreenNavigationType } from '@/navigation/types';
import { Box, Text } from '@/utils/theme';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button } from 'react-native';

const WelcomeScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<'Welcome'>>();
  const navigateToSignInScreen = () => {
    navigation.navigate('SignIn');
  };
  const navigateToSignUpScreen = () => {
    navigation.navigate('SignUp');
  };

  return (
    <Box>
      <Text>Welcome Screen</Text>
      <Button title="Navigate to sign in" onPress={navigateToSignInScreen} />
      <Button title="Navigate to sign in" onPress={navigateToSignUpScreen} />
    </Box>
  );
};

export default WelcomeScreen;
