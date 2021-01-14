import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import Register from './components/Register';
import Footer from './components/Footer';
import * as ROUTES from './constants/routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Register />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
