import React, { useState, useEffect } from 'react';
import { Typography, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CustomButton from '../Custom/CustomButton';
import CustomField from '../Custom/CustomField';
import Redirect from '../Redirect';
import CTA from '../CTA';
import * as ROUTES from '../../constants/routes';
import { useHistory } from 'react-router-dom';
import API from '../../api';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    marginTop: '12px',
    maxWidth: '350px',
  },
  main: {
    border: '1px solid #dbdbdb',
    margin: '0px 0px 10px 0px',
    backgroundColor: theme.palette.white,
    padding: '10px 0',
  },
  formBox: {
    marginBottom: '20px',
  },
  name: {
    textAlign: 'center',
    margin: '22px auto 12px',
  },
  message: {
    margin: '0 40px 10px',
    textAlign: 'center',
  },
  buttonBox: {
    margin: '16px 40px 16px 40px',
  },
  option: {
    display: 'flex',
    flexDirection: 'row',
    margin: '10px 40px 18px',
  },
  line: {
    flexGrow: 1,
    flexShrink: 1,
    height: '1px',
    position: 'relative',
    top: '.45em',
    backgroundColor: '#dbdbdb',
  },
  between: {
    color: '#8e8e8e',
    flexGrow: 0,
    flexShrink: 0,
    fontSize: 13,
    fontWeight: 'bold',
    lineHeight: '15px',
    margin: '0 18px',
    textTransform: 'uppercase',
  },
  outerField: {
    margin: '6px 40px',
  },
  legal: {
    color: '#8e8e8e',
    fontSize: '12px',
    lineHeight: '16px',
    margin: '10px 40px',
    textAlign: 'center',
  },
  link: {
    color: '#8e8e8e',
    fontWeight: 600,
    textDecoration: 'none',
    '&visited': {
      color: '#8e8e8e',
    },
  },
  warning: {
    textAlign: 'center',
    paddingTop: '4px',
  },
}));

const Register = () => {
  const classes = useStyles();
  let history = useHistory();
  
  document.title = 'Login · Instagram'

  const [userData, setUserData] = useState({});
  const [error, setError] = useState('');
  const [disabled, setDisabled] = useState(true);

  const userInputHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    console.log(userData);

    if (
      typeof userData.email === 'undefined' ||
      typeof userData.name === 'undefined' ||
      typeof userData.username === 'undefined' ||
      typeof userData.password === 'undefined' ||
      userData.email === null ||
      userData.name === null ||
      userData.username === null ||
      userData.password === null
    ) {
      console.log('true');
      setDisabled(true);
    } else {
      console.log('false');
      setDisabled(false);
    }
  };

  const registerHandler = (e) => {
    e.preventDefault();
    if (userData.password.length < 6) {
      setError('Email should be longer than 6 characters');
    } else if (userData.email.length < 6) {
      setError('Password should be longer than 6 characters');
    } else {
      setError('');
      const obj = {
        email: userData.email,
        name: userData.name,
        password: userData.password,
      };

      (async () => {
        try {
          await API.post('register', obj);
          setTimeout(() => {
            history.push({
              pathname: ROUTES.PROFILE,
              state: {
                email: userData.email,
                name: userData.name,
              },
            });
          }, 1000);
        } catch (e) {
          console.log(e);
        }
      })();
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <CssBaseline />
        <Typography variant="h1" className={classes.name}>
          Instagram
        </Typography>
        <div className={classes.formBox}>
          <form autoComplete="off">
            <Typography variant="h2" className={classes.message}>
              Sign up to see photos and videos from your friends.
            </Typography>
            <div className={classes.buttonBox}>
              <CustomButton
                name={'Log in with Facebook'}
                startIcon={<FacebookIcon />}
              />
            </div>
            <div className={classes.option}>
              <div className={classes.line}></div>
              <div className={classes.between}>or</div>
              <div className={classes.line}></div>
            </div>
            <CustomField
              purpose={'Mobile Number or Email'}
              placeholder={'Mobile Number or Email'}
              type={'email'}
              name={'email'}
              required={'required'}
              inputHandler={userInputHandler}
            />
            <CustomField
              purpose={'Full Name'}
              placeholder={'Full Name'}
              type={'text'}
              name={'name'}
              required={'required'}
              inputHandler={userInputHandler}
            />
            <CustomField
              purpose={'Username'}
              placeholder={'Username'}
              type={'text'}
              name={'username'}
              required={'required'}
              inputHandler={userInputHandler}
            />
            <CustomField
              purpose={'password'}
              placeholder={'Password'}
              type={'password'}
              name={'password'}
              required={'required'}
              inputHandler={userInputHandler}
            />
            <Typography
              variant="body2"
              color="error"
              className={classes.warning}
            >
              {error}
            </Typography>
            <div className={classes.buttonBox}>
              <CustomButton
                name={'Sign up'}
                disabled={disabled}
                submitHandler={registerHandler}
              />
            </div>

            <Typography variant="body2" className={classes.legal}>
              By signing up, you agree to our{' '}
              <a
                className={classes.link}
                target="_blank"
                rel="noreferrer"
                href="https://help.instagram.com/581066165581870"
                tableindex="0"
              >
                Terms
              </a>{' '}
              ,{' '}
              <a
                className={classes.link}
                target="_blank"
                rel="noreferrer"
                href="https://help.instagram.com/519522125107875"
                tableindex="0"
              >
                Data Policy
              </a>{' '}
              and{' '}
              <a
                className={classes.link}
                target="_blank"
                rel="noreferrer"
                href="https://help.instagram.com/1896641480634370?ref=ig"
                tableindex="0"
              >
                Cookies Policy
              </a>{' '}
              .
            </Typography>
          </form>
        </div>
      </div>
      <Redirect
        message={'Have an account?'}
        route={ROUTES.SIGNIN}
        action={'Log in'}
      />
      <CTA />
    </div>
  );
};

export default Register;
