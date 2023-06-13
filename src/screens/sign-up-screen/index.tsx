import Button from '@/components/shared/button';
import Input from '@/components/shared/input';
import SafeAreaWrapper from '@/components/shared/safe-area-wrapper';
import { AuthScreenNavigationType } from '@/navigation/types';
import { registerUser } from '@/services/api';
import { IUser } from '@/types/index';
import { Box, Text } from '@/utils/theme';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Pressable } from 'react-native';

const SignUpScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<'SignUp'>>();
  const navigateToSignInScreen = () => {
    navigation.navigate('SignIn');
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: IUser) => {
    try {
      const { email, name, password } = data;
      /**
       * register user
       */
      await registerUser({
        email,
        name,
        password,
      });
      navigateToSignInScreen();
    } catch (error) {}
  };

  return (
    <SafeAreaWrapper>
      <Box flex={1} px="5.5" mt={'13'}>
        <Text variant="textXl" fontWeight="700">
          Chào mừng bạn đến với ứng dụng Quản Lý Công Việc Và Nhắc Việc!
        </Text>
        <Text variant="textXl" fontWeight="700" mb="6">
          Hành trình của bạn bắt đầu từ đây.
        </Text>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Tên"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Tên"
              error={errors.name}
            />
          )}
          name="name"
        />
        <Box mb="6" />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Email"
              error={errors.email}
            />
          )}
          name="email"
        />
        <Box mb="6" />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Mật khẩu"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Mật khẩu"
              error={errors.name}
              secureTextEntry
            />
          )}
          name="password"
        />
        <Box mt="5.5" />
        <Pressable onPress={navigateToSignInScreen}>
          <Text color="primary" textAlign="right">
            Đăng nhập ?
          </Text>
        </Pressable>
        <Box mb="5.5" />

        <Button label="Đăng ký" onPress={handleSubmit(onSubmit)} uppercase />
      </Box>
    </SafeAreaWrapper>
  );
};

export default SignUpScreen;
