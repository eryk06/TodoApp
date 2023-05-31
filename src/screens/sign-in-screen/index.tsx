import { AuthScreenNavigationType } from '@/navigation/types';
import { Box, Text } from '@/utils/theme';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button } from 'react-native';

const SignIn = () => {
  const navigation = useNavigation<AuthScreenNavigationType<'SignIn'>>();
  const navigateToSignUpScreen = () => {
    navigation.navigate('SignUp');
  };

  return (
    <Box>
      <Text>Sign In Screen</Text>
      <Button title="Navigate to sign up" onPress={navigateToSignUpScreen} />
    </Box>
  );
};

export default SignIn;
