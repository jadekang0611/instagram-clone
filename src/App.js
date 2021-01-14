import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

function App() {
  return <ThemeProvider theme={theme}></ThemeProvider>;
}

export default App;
