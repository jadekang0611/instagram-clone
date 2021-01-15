import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import theme from './theme';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Register from './components/Register';
import Landing from './components/Landing';
import Footer from './components/Footer';
import * as ROUTES from './constants/routes';

const useStyles = makeStyles((theme) => ({
  section: {
    display: 'flex',
    flexDirection: 'column',
    height: 'inherit',
    [theme.breakpoints.down('xl')]: {
      height: 'inherit',
    },
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  container: {
    display: 'flex',
    height: '100%',
    // overflow: 'hidden',
    // marginBottom: '44px',
    justifyContent: 'center',
  },
  footer: {
    padding: theme.spacing(0, 2),
  },
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route
            path={ROUTES.LANDING}
            component={() => (
              <section className={classes.section}>
                <div></div>
                <main className={classes.main} role="main">
                  <div className={classes.container}>
                    <Landing />
                  </div>
                </main>
                <footer className={classes.footer}>
                  <Footer />
                </footer>
              </section>
            )}
          />
          <Route
            path={ROUTES.REGISTER}
            component={() => (
              <section>
                <main className={classes.main}>
                  <div className={classes.container}>
                    <Register />
                  </div>
                </main>
              </section>
            )}
          />
          <Route path={ROUTES.SIGNIN} component={Register} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
