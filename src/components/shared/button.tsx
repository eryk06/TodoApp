import { Box, Text } from '@/utils/theme';
import React from 'react';
import { Pressable } from 'react-native';

type ButtonProps = {
  label: string;
  onPress: () => void;
  onLongPress?: () => void;
  disabled?: boolean;
};

const Button = ({ label, onPress, onLongPress, disabled }: ButtonProps) => {
  return (
    <Pressable onPress={onPress} onLongPress={onLongPress} disabled={disabled}>
      <Box
        bg={disabled ? 'gray800' : 'primary'}
        py="3.5"
        borderRadius="rounded-7xl"
      >
        <Text
          variant="textXs"
          fontWeight="700"
          color="white"
          textAlign="center"
        >
          {label}
        </Text>
      </Box>
    </Pressable>
  );
};

export default Button;
