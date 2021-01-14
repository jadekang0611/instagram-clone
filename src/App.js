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
  outter: {
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    marginTop: '20px',
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    marginBottom: '44px',
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
      {/* <section>
        <main className={classes.outter}>
          <div className={classes.container}>
            <Register />
          </div>
        </main>
      </section> */}
      <Router>
        <Switch>
          <Route exact path={ROUTES.LANDING} component={Landing} />
          <Route
            path={ROUTES.REGISTER}
            component={() => (
              <section>
                <main className={classes.outter}>
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

      <footer className={classes.footer}>
        <Footer />
      </footer>
    </ThemeProvider>
  );
}

export default App;
