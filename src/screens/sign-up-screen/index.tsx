import Button from '@/components/shared/button';
import Input from '@/components/shared/input';
import SafeAreaWrapper from '@/components/shared/safe-area-wrapper';
import { AuthScreenNavigationType } from '@/navigation/types';
import { Box, Text } from '@/utils/theme';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

const SignUpScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<'SignUp'>>();
  const navigateToSignInScreen = () => {
    navigation.navigate('SignIn');
  };

  return (
    <SafeAreaWrapper>
      <Box flex={1} px="5.5" mt={'13'}>
        <Text variant="textXl" fontWeight="700">
          Welcome to Todo List!
        </Text>
        <Text variant="textXl" fontWeight="700" mb="6">
          Your journey starts here
        </Text>

        <Input label="Name" />
        <Box mb="6" />
        <Input label="Email" />
        <Box mb="6" />
        <Input label="Password" />
        <Box height={44} />
        <Button label="Register" onPress={navigateToSignInScreen} uppercase />
      </Box>
    </SafeAreaWrapper>
  );
};

export default SignUpScreen;
