import Button from '@/components/shared/button';
import Input from '@/components/shared/input';
import SafeAreaWrapper from '@/components/shared/safe-area-wrapper';
import { AuthScreenNavigationType } from '@/navigation/types';
import { Box, Text } from '@/utils/theme';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable } from 'react-native';

const SignInScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<'SignIn'>>();
  const navigateToSignInScreen = () => {
    navigation.navigate('SignUp');
  };

  return (
    <SafeAreaWrapper>
      <Box flex={1} px="5.5" justifyContent="center">
        <Text variant="textXl" fontWeight="700">
          Welcome Back
        </Text>

        <Box mb="6" />
        <Input label="Email" />
        <Box mb="6" />
        <Input label="Password" />
        <Box mt="5.5" />
        <Pressable onPress={navigateToSignInScreen}>
          <Text color="primary" textAlign="right">
            Register?
          </Text>
        </Pressable>
        <Box mb="5.5" />
        <Button label="Login" onPress={navigateToSignInScreen} uppercase />
      </Box>
    </SafeAreaWrapper>
  );
};

export default SignInScreen;
