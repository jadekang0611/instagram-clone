import React from 'react';
import { Typography, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CustomButton from '../Custom/CustomButton';
import CustomField from '../Custom/CustomField';
import Redirect from '../Redirect';
import CTA from '../CTA';
import * as ROUTES from '../../constants/routes';

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
}));

const Register = () => {
  const classes = useStyles();

  const click = (e) => {
    console.log(e);
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
              <CustomButton name={'Log in with Facebook'} />
            </div>
            <div className={classes.option}>
              <div className={classes.line}></div>
              <div className={classes.between}>or</div>
              <div className={classes.line}></div>
            </div>
            <CustomField
              purpose={'Mobile Number or Email'}
              placeholder={'Mobile Number or Email'}
              type={'text'}
              name={'email'}
              required={'required'}
            />
            <CustomField
              purpose={'Full Name'}
              placeholder={'Full Name'}
              type={'text'}
              name={'fullname'}
              required={'required'}
              onClick={click}
            />
            <CustomField
              purpose={'Username'}
              placeholder={'Username'}
              type={'text'}
              name={'username'}
              required={'required'}
            />
            <CustomField
              purpose={'password'}
              placeholder={'Password'}
              type={'text'}
              name={'password'}
              required={'required'}
            />

            <div className={classes.buttonBox}>
              <CustomButton route={ROUTES.PROFILE} name={'Sign up'} />
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
