import Button from '@/components/shared/button';
import SafeAreaWrapper from '@/components/shared/safe-area-wrapper';
import { AuthScreenNavigationType } from '@/navigation/types';
import { Box, Text } from '@/utils/theme';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Pressable, View } from 'react-native';
import { Image } from 'react-native';

const WelcomeScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<'Welcome'>>();
  const navigateToSignInScreen = () => {
    navigation.navigate('SignIn');
  };
  const navigateToSignUpScreen = () => {
    navigation.navigate('SignUp');
  };

  return (
    <SafeAreaWrapper>
      <LinearGradient
        colors={[
          '#ffffff',
          '#fcecff',
          '#f8daff',
          '#fae2ff',
          '#fae2ff',
          '#fef9ff',
          '#ffffff',
        ]}
        style={{ flex: 1 }}
      >
        <Box flex={1} justifyContent="center">
          <Box style={{ justifyContent: "center", alignItems: "center", marginTop: 50, marginBottom: 5}}>
            <Image source={require('../../media/images/Android.png')} />
          </Box>
          <View style={{justifyContent: "center", alignItems: "center"}}>
          <Text style={{width: "100%", color: "#000", textAlign: "center",fontSize: 16, fontWeight: 700}}>
            Bạn có muốn làm việc hiệu quả hơn không?
          </Text>
          </View>
          <Box mx="10" style={{justifyContent: "center", alignItems: "center"}}>
            <Pressable
              onPress={navigateToSignUpScreen}
              style={{ width: "100%", height: "26%", borderRadius: 25, backgroundColor: '#007AFF', justifyContent: "center", alignItems: "center" }}
            >
              <Text variant="textXl" style={{color: "#fff", fontWeight: 600}}>Bắt đầu</Text>
            </Pressable>
          </Box>
        </Box>
      </LinearGradient>
    </SafeAreaWrapper>
  );
};

export default WelcomeScreen;
