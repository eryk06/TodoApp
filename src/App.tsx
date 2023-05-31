import { ThemeProvider } from '@shopify/restyle';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Button from './components/button';
import Navigation from './navigation';
import theme, { Text } from './utils/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
