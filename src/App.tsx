import { ThemeProvider } from '@shopify/restyle';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './components/button';
import theme, { Text } from './utils/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Text variant="text3Xl">
          Open up App.js to start working on your app babel!
        </Text>
        <Button />
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
