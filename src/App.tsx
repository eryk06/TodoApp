import { ThemeProvider } from '@shopify/restyle';
import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';
import theme from './utils/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar translucent />
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
