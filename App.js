import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useColorScheme } from 'react-native';

import Main from './src/Main';
import themes from './src/themes';

export default function App() {
  const themeMode = useColorScheme();
  const theme = themes[ themeMode ] || theme.dark; 
  return (
    <ThemeProvider theme={ theme }>
      <Main />
    </ThemeProvider>      
  );
}
