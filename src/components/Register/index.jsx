import React from 'react';
import {
  Typography,
  Grid,
  CssBaseline,
  Button,
  TextField,
  Paper,
  FormControlLabel,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => {});
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '350px',
    border: '1px solid #000000',
    margin: '0 auto',
  },
  formBox: {},
  name: {
    margin: '22px auto 12px',
  },
  message: {
    margin: '0 40px 10px',
    textAlign: 'center',
  },
  buttonBox: {
    margin: '8px 40px 8px 40px',
  },
}));

const Register = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <CssBaseline />
      <Typography variant="h1" className={classes.name}>
        Instagram
      </Typography>
      <div className={classes.formBox}>
        <form autoComplete="off">
          <Typography variant="h2" className={classes.message}>
            Sign up to see photos and videos from your friends
          </Typography>
          <div className={classes.buttonBox}>
            <Button>Log in with Facebook</Button>
          </div>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            required
            fullWidth
            name="email"
          ></TextField>
          <TextField
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            required
            fullWidth
            name="fullname"
          ></TextField>
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            required
            fullWidth
            name="username"
          ></TextField>
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            required
            fullWidth
            name="password"
          ></TextField>
          <Button type="submit">Sign up</Button>
          <div>
            <Typography variant="body2">
              By signing up, you agree to our Terms, Data Policy and Cookies
              Policy .
            </Typography>
          </div>
        </form>
      </div>
    </Grid>
  );
};

export default Register;
