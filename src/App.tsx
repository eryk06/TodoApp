import { ThemeProvider } from '@shopify/restyle';
import React from 'react';
import Navigation from './navigation';
import theme from './utils/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
